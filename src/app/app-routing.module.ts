import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './pages/main-nav/main-nav.component';

const routes: Routes = [

  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then(
        m => m.WelcomeModule
      )
  },



  {
    path: 'sidenav',
    loadChildren: () =>
      import('./pages/main-nav/main-nav.component').then(
        m => m.MainNavComponent
      )
  },
  {
    path: 'infopedidos',
    loadChildren: () =>
      import('./pages/info-pedidos/info-pedidos.module').then(
        m => m.InfoPedidosModule
      )
  },
  {
    path: 'listapedidos',
    loadChildren: () =>
      import('./pages/lista-pedidos/lista-pedidos.module').then(
        m => m.ListaPedidosModule
      )
  },

  {
    path: 'listaordenes',
    loadChildren: () =>
      import('./pages/ordenes-list/ordenes-list.module').then(
        m => m.OrdenesListModule
      )
  },

  {
    path: 'listacomercios',
    loadChildren: () =>
      import('./pages/lista-comercios/lista-comercios.module').then(
        m => m.ListaComerciosModule
      )
  },

  {
    path: 'listaproductos',
    loadChildren: () =>
      import('./pages/lista-productos/lista-productos.module').then(
        m => m.ListaProductosModule
      )
  },

  {
    path: 'productlistPending',
    loadChildren: () =>
      import('./pages/productlist-pending-aproval/productlist-pending-aproval.module').then(
        m => m.ProductlistPendingAprovalModule
      )
  },

  {
    path: 'categories',
    loadChildren: () =>
      import('./pages/category-list/category-list.module').then(
        m => m.CategoryListModule
      )
  },

  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
