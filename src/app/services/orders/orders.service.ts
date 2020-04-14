import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Orders } from 'src/app/schemas/orders';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) { }
  
  dataRow:any;

      getOrders(){
    return  this.http.get<Orders[]>('/assets/order.json/');
  }

  getOrdersDetails(id){
    return  this.http.get<Orders[]>('/assets/order.json/');
  }



}
