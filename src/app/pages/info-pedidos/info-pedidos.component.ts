import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-pedidos',
  templateUrl: './info-pedidos.component.html',
  styleUrls: ['./info-pedidos.component.css']
})
export class InfoPedidosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("hello");
  }

}
