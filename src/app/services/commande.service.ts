import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from '../models/commande';

const API_URL = 'http://localhost:5000/commandes/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(API_URL);
  }

  public create(commande: Commande): Observable<any> {
    return this.http.post(API_URL, commande);
  }
}
