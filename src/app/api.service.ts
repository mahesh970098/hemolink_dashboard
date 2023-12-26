import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8000'; // Replace this with your API endpoint

  constructor(private http: HttpClient) { }

  postData(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/blood_bank`, formData);
  }
}
