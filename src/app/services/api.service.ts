import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getLocais(): Observable<any>{
    return this.http.get(`${this.baseURL}/locais`);
  }
  getBens(): Observable<any>{
    return this.http.get(`${this.baseURL}/bens`);
  }
  addBem(bem: any): Observable<any>{
    return this.http.post(`${this.baseURL}/bens`, bem);
  }
  addLocal(local: any): Observable<any>{
    return this.http.post(`${this.baseURL}/locais`, local);
  }

  
}
