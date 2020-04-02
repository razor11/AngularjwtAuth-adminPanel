import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OrdersService } from 'src/app/services/orders/orders.service';

export interface PeriodicElement {
  id: string;
  customer: string;
  total: number;
  payMethod: string;
  paymentId: string;
  state: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '0001', customer: 'Andrea Mendez', total: 1.0079, payMethod: 'Online', paymentId:'098-aada', state: "Pendiente"},
  {id: '0002', customer: 'Andrea Mendez', total: 1.0079, payMethod: 'Online', paymentId:'098-aada', state: "Pendiente"},



];

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent {
displayedColumns: string[] = ['Pedido', 'Total', 'MetododePago', 'IddePago', 'Estado', 'Accion'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
 
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private ordersData: OrdersService ) { this.ordersData.getOrders().subscribe((branches) => {
    this.dataSource = new MatTableDataSource(branches);
    console.log(this.dataSource);
   });
  }


}

