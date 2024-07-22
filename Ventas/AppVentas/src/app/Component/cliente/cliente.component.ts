import { Component } from '@angular/core';
import { ApiclienteService } from '../../service/apicliente.service';


@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  constructor(
    private apiCliente: ApiclienteService
  ) {
    apiCliente.getClientes().subscribe(respuesta => {
      console.log(respuesta);
    })
  }

}
