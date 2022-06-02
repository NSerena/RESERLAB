import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../interfaces/equipos.interface';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [],
})
export class ListadoComponent implements OnInit {
  equipos: Equipo[] = [];

  tipos: string[] = ['todos', 'térmicos', 'síntesis', 'caracterización'];
  tipoActivo: string = 'todos';

  constructor(private equiposService: EquiposService) {}

  ngOnInit(): void {
    this.equiposService.getEquipos().subscribe((resp) => {
      this.equipos = resp;
    });
  }

  activarTipo(tipo: string) {
    this.tipoActivo = tipo;
    if (tipo === 'todos') {
      this.equiposService.getEquipos().subscribe((resp) => {
        this.equipos = resp;
      });
    } else {
      this.equiposService.getPorTipo(tipo).subscribe((resp) => {
        this.equipos = resp;
      });
    }
  }
}
