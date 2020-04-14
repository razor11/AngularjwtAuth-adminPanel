import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { ComerciosService } from 'src/app/services/comercios/comercios.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-lista-comercios',
  templateUrl: './lista-comercios.component.html',
  styleUrls: ['./lista-comercios.component.css']
})
export class ListaComerciosComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Nombre', 'Categoria', 'Pais', 'Estado', 'Accion'];
  
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(public storesService: ComerciosService,public router: Router) { }

  ngOnInit(): void {
    this.storesService.getStores().subscribe((branches) => {
      this.dataSource = new MatTableDataSource(branches);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public getStore(row: any) {
    console.log(row);
    let store = JSON.stringify(row);
    this.router.navigate(['/sidenav/listacomercios/storedetails', {store : store,}], { skipLocationChange: true });

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
