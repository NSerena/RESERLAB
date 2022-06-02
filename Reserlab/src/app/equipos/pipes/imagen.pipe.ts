import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from '../interfaces/equipos.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(equipo:Equipo): string {
    return `assets/fotos_equipos/${equipo.id}.jpg`
  }

}
