import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComerciosComponent } from './lista-comercios.component';


const routes: Routes = [{path: '',
component: ListaComerciosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaComerciosRoutingModule { }
