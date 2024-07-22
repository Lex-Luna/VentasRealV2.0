import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {
  //Variables
  private url: string = "https://localhost:7226/api/Cliente";


  //COnstructor
  private _http = inject(HttpClient);
  constructor(/* private _http: HttpClient */) {

  }

  /* getCliente(): Observable<Respuesta>
  {
    return this.http.get<Respuesta>(this._url);
  } */
  getClientes(): Observable<Respuesta> {
    return this._http.get<Respuesta>(this.url);

  }
}
