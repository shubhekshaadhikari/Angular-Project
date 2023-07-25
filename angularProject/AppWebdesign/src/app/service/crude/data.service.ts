// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Dataset {
  id?: number;
  fname: string;
  lname: string;
  email: string;
  role: string;
  country: string;
  time: string;
  bio: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/profiledata';

  constructor(private http: HttpClient) {}

  addData(data: Dataset): Observable<Dataset> {
    return this.http.post<Dataset>(this.apiUrl, data);
  }

  getAll(): Observable<Dataset[]> {
    return this.http.get<Dataset[]>(this.apiUrl);
  }

  getData(id: number): Observable<Dataset>{
    const url= `${this.apiUrl}/${id}`;
    return this.http.get<Dataset>(url);
  }

  updateData(data: Dataset): Observable<Dataset> {
    const url = `${this.apiUrl}/${data.id}`;
    return this.http.put<Dataset>(url, data);
  }

  deleteData(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
