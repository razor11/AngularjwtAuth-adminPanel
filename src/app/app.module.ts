import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MainNavComponent } from './pages/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { OrdenesListComponent } from './pages/ordenes-list/ordenes-list.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DemoMaterialModule } from './Material-module';
import { ListaPedidosComponent } from './pages/lista-pedidos/lista-pedidos.component';
import { OrdersService } from './services/orders/orders.service';
import { HttpClientModule } from '@angular/common/http';
import { InfoPedidosComponent } from './pages/info-pedidos/info-pedidos.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StylePaginatorDirective } from './pages/directives/style-paginator';
import { JwtModule } from '@auth0/angular-jwt';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { ListaComerciosComponent } from './pages/lista-comercios/lista-comercios.component';
import { StoreDetailComponent } from './pages/store-detail/store-detail.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    OrdenesListComponent,
    ListaPedidosComponent,
    ListaProductosComponent,
    InfoPedidosComponent,
    CategoryListComponent,
    StylePaginatorDirective,
    ListaComerciosComponent,
    LoginComponent,
    StoreDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatNativeDateModule,
    DemoMaterialModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('jwt');
        },
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    }),
    NgbModule,
    FlexLayoutModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [ListaPedidosComponent],
  providers: [
    OrdersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
