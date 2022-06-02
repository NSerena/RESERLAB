import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EquiposRoutingModule } from './equipos-routing.module';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { EquipoTarjetaComponent } from './components/equipo-tarjeta/equipo-tarjeta.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    BuscarComponent,
    EquipoComponent,
    EquipoTarjetaComponent,
    HomeComponent,
    ImagenPipe,
    ListadoComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    EquiposRoutingModule,
    MaterialModule
  ]
})
export class EquiposModule { }
