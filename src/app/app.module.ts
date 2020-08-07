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
import {MatCardModule} from '@angular/material/card';
import { OrdenesListComponent } from './pages/ordenes-list/ordenes-list.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { ListaPedidosComponent } from './pages/lista-pedidos/lista-pedidos.component';
import { OrdersService } from './services/orders/orders.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfoPedidosComponent } from './pages/info-pedidos/info-pedidos.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JwtModule, JwtInterceptor } from '@auth0/angular-jwt';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { ListaComerciosComponent } from './pages/lista-comercios/lista-comercios.component';
import { StoreDetailComponent } from './pages/store-detail/store-detail.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { ProdutcFilterPipe } from './pipes/products.filter.pipe';
import { fakeBackendProvider } from './helpers/fake_backend';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { StylePaginatorDirective } from './pages/directives/style-paginator';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';


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
    ProdutcFilterPipe
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
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatNativeDateModule,
    MatMenuModule,
    MatCardModule,
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
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
