import { Injectable } from '@angular/core';
import { DataService, Dataset } from '../crude/data.service';
import { PaginationService } from '../pagination/pagination.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private formdata: Dataset[] = [];
  private filter: Dataset[] = [];

  constructor(
    private dataService: DataService,
    private pagination: PaginationService
    ) {
    this.dataService.getAll().subscribe((formdata) => {
      this.formdata = formdata;
      this.filter = formdata;
      // console.log('Formdata:', this.formdata); 
    });
  }

  search(searchTerm: string): void {
    searchTerm = searchTerm.toLowerCase().trim();
    // console.log('Search Term', searchTerm);
    this.filter = this.formdata.filter((user) => {
      return (
        (user.fname && user.fname.toLowerCase().includes(searchTerm)) ||
        (user.lname && user.lname.toLowerCase().includes(searchTerm)) ||
        (user.email && user.email.toLowerCase().includes(searchTerm)) ||
        (user.role && user.role.toLowerCase().includes(searchTerm)) ||
        (user.bio && user.bio.toLowerCase().includes(searchTerm))
      );
    });
    // console.log('Filtered data', this.filter);
    this.pagination.setCurrentPage(1);
  }
  

  getFilteredData(): Dataset[] {
    return this.filter;
  }
}
