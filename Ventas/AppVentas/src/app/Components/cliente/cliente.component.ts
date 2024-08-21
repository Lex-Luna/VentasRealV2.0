import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Respuesta } from '../../Models/Respuesta';
import { Observable } from 'rxjs';

import { ApiclienteService } from '../../Services/apicliente.service';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogComponent } from '../../Commons/dialog/dialog.component';
import { DialogRef } from '@angular/cdk/dialog';
import { Cliente } from '../../Models/Cliente';



@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [MatTableModule,

    MatSnackBarModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  public lst: any[] = [];
  public columnas: string[] = ["id", "nombre", "actions"];
  constructor(
    private apiCliente: ApiclienteService,
    private dialog: MatDialog
  ) {

  }
  ngOnInit(): void {
    this.getCliente();
  }
  getCliente() {
    this.apiCliente.getClientes().subscribe(respuesta => {
      this.lst = respuesta.data;

    })
  }
  openAdd() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "300"
    }
    );
    dialogRef.afterClosed().subscribe(result => this.getCliente()
    )
  }
  openEdit(cliente: Cliente) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "300",
      data: cliente
    });
    dialogRef.afterClosed().subscribe(result => this.getCliente()
    )
  }

}
