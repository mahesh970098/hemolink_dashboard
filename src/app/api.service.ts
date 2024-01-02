import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://hemolink.in:8000'; // Replace this with your API endpoint

  constructor(private http: HttpClient) { }

  postData(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/blood_bank`, formData);
  }

  postData_image(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/post_image`, formData);
  }


  Getalldata(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Search_names`);
  }
}
