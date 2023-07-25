import { Injectable } from '@angular/core';
import { DataService, Dataset } from '../crude/data.service';
import { PaginationService } from '../pagination/pagination.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private formdata: Dataset[] = [];
  private filter!: Dataset[];

  constructor(private dataService: DataService) {
    this.dataService.getAll().subscribe((formdata) => {
      this.formdata = formdata;
      this.filter = formdata;
    });
  }

  search(searchTerm: string): void {
    searchTerm = searchTerm.toLowerCase().trim();
    this.filter = this.formdata.filter(
      (user) =>
        user.fname.toLowerCase().includes(searchTerm) ||
        user.lname.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.role.toLowerCase().includes(searchTerm) ||
        user.bio.toLowerCase().includes(searchTerm)
    );
  }

  getFilteredData(): Dataset[] {
    return this.filter;
  }
}
