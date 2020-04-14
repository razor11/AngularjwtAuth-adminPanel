import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stores } from 'src/app/schemas/stores';



@Injectable({
  providedIn: 'root'
})
export class ComerciosService {



  constructor(private http: HttpClient) { }


  getStores() {
    let url;
    url = '/assets/comercios.json/';
    return this.http.get<Stores[]>(url);
  }





}
