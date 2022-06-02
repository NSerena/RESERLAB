
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../interfaces/equipos.interface';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  private baseUrl:string="http://localhost:3000"

  constructor( private http:HttpClient) { }

  getEquipos():Observable<Equipo[]>{
    return this.http.get<Equipo[]>(`${this.baseUrl}/equipos`)
  }

  getPorTipo(tipo:string):Observable<Equipo[]>{
    return this.http.get<Equipo[]>(`${this.baseUrl}/equipos?tipo=${tipo}`)
  }

  getPorId(id: string): Observable<Equipo> {
    return this.http.get<Equipo>(`${this.baseUrl}/equipos/${id}`);
  }

  getSugerencias(termino:string):Observable<Equipo[]>{
    return this.http.get<Equipo[]>(`${this.baseUrl}/equipos?q=${termino}&_limit=5`);
  }

}
