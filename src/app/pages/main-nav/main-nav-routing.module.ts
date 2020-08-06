import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav.component';
import { InfoPedidosComponent } from '../info-pedidos/info-pedidos.component';


const routes: Routes = [{
    path: '', component: MainNavComponent,
    children: [
        {
            path: 'welcome',
            children: [
                {
                    path: '',
                    loadChildren: () =>
                        import('../welcome/welcome.module').then(
                            m => m.WelcomeModule
                        )
                }
            ]
        },

        {
            path: 'infopedidos',
            children: [
                {
                    path: '',
                    component: InfoPedidosComponent,
                    loadChildren: () =>
                        import('../info-pedidos/info-pedidos.module').then(
                            m => m.InfoPedidosModule
                        )
                }
            ]

        },

 
            {
              path: 'listacomercios/storedetails',
              children: [
                {
                    path: '',
                    loadChildren: () =>
                        import('../store-detail/store-detail.module').then(
                            m => m.StoreDetailModule
                        )
                }
            ]
            },
        


        {
            path: 'listapedidos',
            children: [
                {
                    path: '',

                    loadChildren: () =>
                        import('../lista-pedidos/lista-pedidos.module').then(
                            m => m.ListaPedidosModule
                        )
                }
            ]

        },

        {
            path: 'listacomercios',
            children: [
                {
                    path: '',

                    loadChildren: () =>
                        import('../lista-comercios/lista-comercios.module').then(
                            m => m.ListaComerciosModule
                        ),
                }
            ]

        },


        {
            path: 'listaproductos',
            children: [
                {
                    path: '',

                    loadChildren: () =>
                        import('../lista-productos/lista-productos.module').then(
                            m => m.ListaProductosModule
                        )
                }
            ]

        },

        {
            path: 'categories',
            children: [
                {
                    path: '',

                    loadChildren: () =>
                        import('../category-list/category-list.module').then(
                            m => m.CategoryListModule
                        )
                }
            ]

        },




        // {
        //   path: 'listaordenes',
        //   loadChildren: () =>
        //     import('./pages/ordenes-list/ordenes-list.module').then(
        //       m => m.OrdenesListModule
        //     )
        // },

        {
            path: '',
            redirectTo: 'welcome',
            pathMatch: 'full'
        }
    ]


},
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SideNavRoutingModule { }
