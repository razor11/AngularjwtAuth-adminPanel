import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav/sidenav-module';
import { MatToolbarModule } from '@angular/material/toolbar/toolbar-module';
import { MatIconModule } from '@angular/material/icon/icon-module';
import { MatButtonModule } from '@angular/material/button/button-module';
import { MatListModule } from '@angular/material/list/list-module';
import { MainNavComponent } from './main-nav.component';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatListModule,
    CommonModule
  ],

  declarations: []
})
export class MainNavModule { }


