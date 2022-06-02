import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Equipo } from '../../interfaces/equipos.interface';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styles: [`
    img{
      max-height: 600px;
      border-radius: 5px;
      margin: auto;
    }
  `],
})
export class EquipoComponent implements OnInit {
  equipo!: Equipo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private equiposService: EquiposService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.equiposService.getPorId(id)))
      .subscribe((resp) => (this.equipo = resp));
  }

  regresar() {
    this.router.navigate(['/equipos/listado']);
  }
}
