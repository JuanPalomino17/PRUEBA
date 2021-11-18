import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasboardRoutingModule } from './dasboard-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DasboardRoutingModule,
    SharedModule
  ]
})
export class DasboardModule { }
