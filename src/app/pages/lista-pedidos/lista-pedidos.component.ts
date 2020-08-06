import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {
  displayedColumns: string[] = ['Pedido', 'Total', 'MetododePago', 'IddePago', 'Estado', 'Accion'];

  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private ordersData: OrdersService,
    public router: Router) { }

  ngOnInit() {
    this.ordersData.getOrders().subscribe((branches) => {
      this.dataSource = new MatTableDataSource(branches);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public getRecord(row: any) {
    console.log(row);
    let jsonData = JSON.stringify(row);
    this.router.navigate(['/infopedidos', {jsonData : jsonData,}], { skipLocationChange: true });

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }








}

