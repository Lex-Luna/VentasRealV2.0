import { Component, Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Cliente } from '../../Models/Cliente';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiclienteService } from '../../Services/apicliente.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Respuesta } from '../../Models/Respuesta';


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
    /* esta linea de ↓ sirbe para poder observar los datos de cierto registro de la bdd */
    @Inject(MAT_DIALOG_DATA) public cliente: Cliente
  ) {

    if (this.cliente != null)
      this.nombre = cliente.nombre;
  }

  close() {
    this.dialogRef.close();
  }
  addCliente() {
    const cliente: Cliente = {
      nombre: this.nombre,
      id: 0
    };
    this.apiCliente.add(cliente).subscribe(Respuesta => {
      console.log(Respuesta)
      if (Respuesta.exito == 1) {
        this.dialogRef.close();
        this.snackBar.open("Cliente insertado con exito", "", {
          duration: 2000
        });
      }
    });
  }
  /* manda al back a insertar el cliente */
  editCliente() {
    const cliente: Cliente = { nombre: this.nombre, id: this.cliente.id };
    this.apiCliente.edit(cliente).subscribe(Respuesta => {
      console.log(Respuesta)
      if (Respuesta.data === 1) {
        this.dialogRef.close();
        this.snackBar.open("Cliente editado con exito", "", {
          duration: 2000
        });
      }
    });
  }
}
