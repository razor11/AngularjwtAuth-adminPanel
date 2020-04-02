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





  ngOnInit(): void {
    this.data = this.ordersData.getOrders().subscribe((response) => {
      this.data = (response);
      this.route.paramMap.subscribe(params => { this.dataSource = this.data[+params.get('id')]; });
      console.log(this.order);
      this.order = this.dataSource;
      this.order = new MatTableDataSource (this.order);
    });


  }

}

