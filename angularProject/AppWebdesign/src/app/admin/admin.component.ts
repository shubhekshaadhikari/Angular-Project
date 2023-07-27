import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService,Dataset } from '../service/crude/data.service';
import { PaginationService } from '../service/pagination/pagination.service';
import { SearchService } from '../service/search/search.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  formdata: Dataset[] = [];
      
  constructor(
    private router: Router, 
    private dataservice: DataService,
    private pagination: PaginationService,
    private search: SearchService
    ) {}

  ngOnInit(): void {
    this.dataservice.getAll().subscribe((formdata) => {
      this.formdata = formdata;
      // console.log("admin", this.formdata);
      this.search.search('');
    });
  }
  
  onDelete(id: number | undefined):void{
    if (id === undefined) {
      // Handle the case when id is undefined 
      console.log('No valid ID provided for deletion.');
      return;
    }
    if (confirm("Are you sure you want to delete?") == true){
      this.dataservice.deleteData(id).subscribe(() => {
        this.formdata = this.formdata.filter(formdata => formdata.id !==id);
      });
      alert("Data deleted sucessfully");
    }
  }

  onEdit(id: number | undefined): void {
    if(id !== undefined){
      const user = this.formdata.find(formdata => formdata.id === id);
      this.router.navigate(['/form', id], { state: {data: user} });
    } else{
      console.log("No valid ID provided for editing");
    }
  }

  //open form page on click 
  Form(event: Event) {
    event.preventDefault();
    this.router.navigate(['/form']); 
  }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.search.search(searchTerm);
    this.currentPage = 1;
  }

  totalPages(): number {
    return Math.ceil(this.search.getFilteredData().length / this.pagination.getItemsPerPage());
  }

  getPageItems(): Dataset[] {
    const filteredData = this.search.getFilteredData(); 
    const firstIndex = (this.currentPage - 1) * this.pagination.getItemsPerPage();
    const lastIndex = firstIndex + this.pagination.getItemsPerPage();
    return filteredData.slice(firstIndex, lastIndex);
  }

  previousPage(): void{
   this.pagination.previousPage();
  }

  nextPage(): void{
    const totalPage = this.totalPages();
    this.pagination.nextPage(totalPage);
  }

  get currentPage(): number{
    return this.pagination.getCurrentPage();
  }

  set currentPage(page: number){
    this.pagination.setCurrentPage(page);
  }

}
