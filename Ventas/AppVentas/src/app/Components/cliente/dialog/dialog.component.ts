import { Component, Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Cliente } from '../../../Models/Cliente';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiclienteService } from '../../../Services/apicliente.service';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    FormsModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule

  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  public nombre: string = "";
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public apiCliente: ApiclienteService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public cliente: Cliente
  ) {
    if (cliente != null)
      this.nombre = cliente.nombre;


  }

  close() {
    this.dialogRef.close();
  }
  addCliente() {
    const cliente: Cliente = {
      nombre: this.nombre
    };
    this.apiCliente.add(cliente).subscribe(Respuesta => {
      if (Respuesta.exito === 1) {
        this.dialogRef.close();
        this.snackBar.open("Cliente insertado con exito", "", {
          duration: 2000
        });
      }
    });
    this.dialogRef.close();
    this.snackBar.open("Cliente insertado con exito", "", {
      duration: 2000
    });
    this.apiCliente.add(cliente).subscribe(Respuesta => {
      console.log(Respuesta.exito)
      this.dialogRef.close();
      if (Respuesta.exito == 1) {
        this.dialogRef.close();
        this.snackBar.open("Cliente insertado con exito", "", {
          duration: 2000
        });
      }
    });
  }
}
