import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistPendingAprovalComponent } from './productlist-pending-aproval.component';


const routes: Routes = [{path: '', component: ProductlistPendingAprovalComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductlistPendingAprovalRoutingModule { }
