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


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    OrdenesListComponent,
    ListaPedidosComponent,
    InfoPedidosComponent
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
    NgbModule,
    FlexLayoutModule
    

  ],
  entryComponents: [ListaPedidosComponent],
  providers: [
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
