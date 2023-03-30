import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livrer } from '../models/livrer';

const API_URL = 'http://localhost:5000/livrers/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LivrerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(API_URL);
  }

  public create(livrer: Livrer): Observable<any> {
    return this.http.post(API_URL, livrer);
  }
}
