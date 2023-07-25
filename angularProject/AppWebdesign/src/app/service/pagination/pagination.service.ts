import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private itemsPerPage: number = 5;
  private currentPage: number = 1;

  constructor() { }

  // setItemsPerPage(itemsPerPage: number): void {
  //   this.itemsPerPage = itemsPerPage;
  // }

  getItemsPerPage(): number {
    return this.itemsPerPage;
  }

  setCurrentPage(page: number): void {
    this.currentPage = page;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(totalPages: number): void {
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  
}
