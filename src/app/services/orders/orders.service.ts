import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Orders {
  id: string;
  customerName: string;
  customerLastName: string;
  customerEmail: string;
  tel: number;
  address: string;
  city: string;
  country: number;
  total: number;
  subtotal: number,
  discount: number,
  shippingPrice:number,
  taxas: number, 
  amount: number;
  payMethod: string;
  paymentId: string;
  state: string;
  orderDate: string;
  product: string;
  price: number;
}


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) { }
  


      getOrders(){
    return  this.http.get<Orders[]>('/assets/order.json');
  }


}
