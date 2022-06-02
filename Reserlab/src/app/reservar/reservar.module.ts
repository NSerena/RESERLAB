import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservarComponent } from './reservar.component';
import { MaterialModule } from '../material/material.module';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ReservarComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    jqxSchedulerModule,
  ]
})
export class ReservarModule { }
