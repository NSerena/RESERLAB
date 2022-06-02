import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposModule } from './equipos/equipos.module';
import { ReservarComponent } from './reservar/reservar.component';

const routes: Routes = [
  {
    path: 'equipos',
    loadChildren: () =>
      import('./equipos/equipos.module').then((m) => EquiposModule),
  },
  {
    path: 'reservar',
    component: ReservarComponent,
  },
  {
    path: '**',
    redirectTo: 'equipos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
