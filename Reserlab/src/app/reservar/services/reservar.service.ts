import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../interfaces/reservar.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReservarService {

  private baseUrl:string="http://localhost:3000"

  constructor(private http:HttpClient) { }

  getReservas():Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${this.baseUrl}/equipos`)
  }

}
