import { Component, Input } from '@angular/core';
import { Equipo } from '../../interfaces/equipos.interface';

@Component({
  selector: 'app-equipo-tarjeta',
  templateUrl: './equipo-tarjeta.component.html',
  styles: [
    `
      mat-card {
        display:block;
        height: 90%;
        margin-bottom: 10px;
        margin-top: 10px;
      }
      mat-card-header {
        height: 30%;
        align-items: center;
      }
      img {
        object-position: center center;
        height: 50%;
      }
      mat-card-actions {
        height: 20%;
      }
    `,
  ],
})
export class EquipoTarjetaComponent {
  @Input() equipo!: Equipo;
}
