import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrdersService } from 'src/app/services/orders/orders.service';


@Component({
  selector: 'app-info-pedidos',
  templateUrl: './info-pedidos.component.html',
  styleUrls: ['./info-pedidos.component.css']
})
export class InfoPedidosComponent implements OnInit {
  columnsToDisplay = ['Producto', 'Precio','Cantidad', 'Medoto de Pago'];
  order;
  data;
  dataSource;
  displayedColumns: string[] = ['Pedido', 'Total', 'MetododePago'];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private ordersData: OrdersService
  ) {
  }


  setValue(value): void {
    this.dataSource.state = value;
    console.log(this.dataSource.state);
}


  ngOnInit() {
  
    this.dataSource = JSON.parse(this.route.snapshot.params['jsonData']);
    console.log(this.dataSource);


  }

}

// let id = this.route.snapshot.paramMap.get('id');
//     console.log(id)
//     this.data = this.ordersData.getOrdersDetails(id).subscribe((response) => {
//       this.data = (response);
//        this.dataSource = this.data;
//     });