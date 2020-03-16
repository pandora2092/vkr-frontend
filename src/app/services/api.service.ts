import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllItem() {
    return this.http.get(`http://localhost:3000/api/search`);
  }

  public addItemToTable(name, code, manuscript, info, bibliography) {

    const item = {name, code, manuscript, info, bibliography};

    return this.http.post(`http://localhost:3000/api/item/save`, item);
  }
}
