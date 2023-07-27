import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private itemsPerPage: number = 6;
  private currentPage: number = 1;

  constructor() { }

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
    // console.log('Previous Page:', this.currentPage);
  }

  nextPage(totalPages: number): void {
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
    // console.log('Next Page:', this.currentPage);
  }
}
