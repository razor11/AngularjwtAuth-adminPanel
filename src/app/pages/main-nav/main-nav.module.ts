import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainNavComponent } from './main-nav.component';
import { SideNavRoutingModule } from './main-nav-routing.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SideNavRoutingModule
  ],

  declarations: []
})
export class MainNavModule { }


