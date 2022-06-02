import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Equipo } from '../../interfaces/equipos.interface';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
    `
      
    `,
  ],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  equipos: Equipo[] = [];
  equipoSeleccionado: Equipo | undefined;

  constructor(private equiposService: EquiposService) {}

  ngOnInit(): void {}

  buscando() {
    this.equiposService
      .getSugerencias(this.termino)
      .subscribe((equipos) => (this.equipos = equipos));
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.equipoSeleccionado = undefined;
      return;
    }

    const equipo: Equipo = event.option.value;
    this.termino = equipo.nombre;

    this.equiposService
      .getPorId(equipo.id!)
      .subscribe((equipo) => (this.equipoSeleccionado = equipo));
  }
}
