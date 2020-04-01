import { Injectable, Inject } from '@angular/core';
import {HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllItem() {
    return this.http.get(`http://localhost:3000/api/search`);
  }

  public getItemById(id: any) {
    return this.http.get(`http://localhost:3000/api/search/${id}`);
  }

  public addItemToTable(name, code, manuscript, info, bibliography) {

    const item = {name, code, manuscript, info, bibliography};

    return this.http.post(`http://localhost:3000/api/item/save`, item);
  }

  public deteleFromTable(id: any) {
    return this.http.post(`http://localhost:3000/api/admin/item/${id}`, {});
  }

  public editRow(id: any, name, code, manuscript, info, bibliography) {
    const item = {name, code, manuscript, info, bibliography};
    return this.http.post(`http://localhost:3000/api/admin/item/${id}/edit`, item);
  }
}
