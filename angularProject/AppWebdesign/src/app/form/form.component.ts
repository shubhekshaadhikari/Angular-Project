import { Component, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dataset, DataService } from '../service/crude/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {
  @Input() data!: Dataset | undefined ;
  form: FormGroup;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private dataService: DataService, 
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.form = this.fb.group({
      fname: [''],
      lname: [''],
      email: [''],
      img: [''],
      role: [''],
      country: [''],
      time: [''],
      bio: [''],
      file: ['']
    });
  }

  ngOnChanges(): void {
    if (this.data ) {
      this.isEditing = true;
      this.form.patchValue(this.data);
    } else {
      this.isEditing = false;
      this.form.reset();
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      const userData = history.state.data;
      if (userData && userData.id === id) {
        this.data = userData;
        this.isEditing = true;
        this.form.patchValue(userData);
      } else {
        this.isEditing = false;
        this.form.reset();
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData: Dataset = this.form.value;
      if (this.isEditing) {
        // data present then update the existing data
        if (this.data && this.data.id) {
          formData.id = this.data.id;
          this.dataService.updateData(formData).subscribe(() => {
            alert('Data updated in table');
          });
        }
      } else {
        // data absent then add new data
        this.dataService.addData(formData).subscribe(() => {
          alert('Data added to table');
        });
      }
      this.form.reset();
      this.router.navigate(['/admin']); 
    }
  }
}
