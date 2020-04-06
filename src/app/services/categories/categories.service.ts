import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categories } from 'src/app/schemas/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  constructor(private http: HttpClient) { }

  getCategories() {
    return  this.http.get<Categories[]>('/assets/categories.json/');
  }

 

  editCategories(cat) {
   

  }

}
