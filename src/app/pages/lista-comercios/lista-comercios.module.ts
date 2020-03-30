import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaComerciosRoutingModule } from './lista-comercios-routing.module';
import { ListaComerciosComponent } from './lista-comercios.component';


@NgModule({
  declarations: [ListaComerciosComponent],
  imports: [
    CommonModule,
    ListaComerciosRoutingModule
  ]
})
export class ListaComerciosModule { }
