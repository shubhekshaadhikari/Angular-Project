import { Component,Input } from '@angular/core';
import { FormControl,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {
  @Input() control!: any;
  @Input() fieldName!: string ;

  get isInvalid(): boolean {
    return this.control && this.control.invalid && this.control.touched;

  }

  check: any = '';
  get errorMessage(): string{
    this.check='';
    if(this.control.hasError('required')){
     this.check += `${this.fieldName} is required.\n`;
    }

    if(this.control.hasError('pattern')){
      if(this.fieldName =='Name'){
        this.check += `${this.fieldName} does not support numbers.\n`;
      }
      else if(this.fieldName == 'Email')
      {
        this.check += `Please enter correct ${this.fieldName} format.\n`
      }
    }

    if(this.control.hasError('minlength')){
      this.check += `${this.fieldName} must be at least ${this.control.errors?.['minlength'].requiredLength} character.\n`;
    }

    if(this.control.hasError('maxlength')){
      this.check += `${this.fieldName} must be ${this.control.errors?.['maxlength'].requiredLength} character.\n`;
    }
   
    if(this.control.hasError('passwordMatch')){
      this.check += `Password do not match` ;
    }

    return this.check;
  }
}

