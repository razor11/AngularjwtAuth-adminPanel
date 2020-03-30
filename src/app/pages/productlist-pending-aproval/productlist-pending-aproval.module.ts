import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductlistPendingAprovalRoutingModule } from './productlist-pending-aproval-routing.module';
import { ProductlistPendingAprovalComponent } from './productlist-pending-aproval.component';


@NgModule({
  declarations: [ProductlistPendingAprovalComponent],
  imports: [
    CommonModule,
    ProductlistPendingAprovalRoutingModule
  ]
})
export class ProductlistPendingAprovalModule { }
