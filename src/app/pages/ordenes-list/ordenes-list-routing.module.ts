import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdenesListComponent } from './ordenes-list.component';


const routes: Routes = [{path: '', component: OrdenesListComponent}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenesListRoutingModule { }
