import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Respuesta } from '../../Models/Respuesta';
import { Observable } from 'rxjs';

import { ApiclienteService } from '../../Services/apicliente.service';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  public lst: any[] = [];
  public columnas: string[] = ["id", "nombre"];
  constructor(
    private apiCliente: ApiclienteService
  ) {
    apiCliente.getClientes().subscribe(respuesta => {
      this.lst = respuesta.data;
      console.log(respuesta);
    })
  }
  getCliente() {
    /* this.apiCliente.getClientes().subscribe(respuesta => {
      this.lst = respuesta.data;
      console.log(respuesta);
    }) */
  }
}
