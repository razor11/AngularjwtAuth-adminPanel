import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoPedidosComponent } from './info-pedidos.component';

const routes: Routes = [{path: '/:id',
 component: InfoPedidosComponent}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoPedidosRoutingModule { }
