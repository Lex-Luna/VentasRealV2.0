import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../Models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class ApliClienteService {
  url: string = "https://localhost:7226/api/Cliente";


  constructor(
    private _http: HttpClient
  ) {

  }
  getCliente(): Observable<Respuesta> {
    return this._http.get<Respuesta>(this.url);

  }
}
