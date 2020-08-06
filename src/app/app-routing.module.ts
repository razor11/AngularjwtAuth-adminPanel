import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPedidosComponent } from './pages/info-pedidos/info-pedidos.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        m => m.LoginModule
      )
  },

  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/main-nav/main-nav.module').then(
        m => m.MainNavModule
      )
  },
 
  { path: '**', redirectTo: '' },



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
