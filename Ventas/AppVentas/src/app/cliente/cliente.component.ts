import { Component } from '@angular/core';
import { ApliClienteService } from '../services/apli-cliente.service';
import { response } from 'express';
import { Respuesta } from '../Models/respuesta';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  /* constructor(
    private apiCliente: ApliClienteService
  ) {
    this.apiCliente.getCliente().subscribe(Respuesta => {
      console.log(Respuesta)
    })
  } */

}
