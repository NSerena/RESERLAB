import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarComponent } from '../equipos/pages/buscar/buscar.component';
import { EquipoComponent } from '../equipos/pages/equipo/equipo.component';
import { ListadoComponent } from '../equipos/pages/listado/listado.component';
import { ReservarComponent } from './reservar.component';

const routes: Routes = [
  {
    path: '',
    component: ReservarComponent,
    children: [
      {
        path: 'listado',
        component: ListadoComponent,
      },
      {
        path: 'buscar',
        component: BuscarComponent,
      },
      {
        path: ':id',
        component: EquipoComponent,
      },
      {
        path: '**',
        component: ReservarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquiposRoutingModule {}
