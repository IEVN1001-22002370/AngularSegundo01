import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProyectoapiService } from '../proyectoapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vista-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './vista-sign-up.component.html',
  styleUrls: ['./vista-sign-up.component.css']
})
export class VistaSignUpComponent {

  mensaje = '';

  usuario = {
    nombre: '',
    apellidos: '',
    correo: '',
    contrasenia: ''
  };

  constructor(private api: ProyectoapiService) {}

  registrar() {
    this.mensaje = '';

    // Validación básica
    if (!this.usuario.nombre || !this.usuario.apellidos ||
        !this.usuario.correo || !this.usuario.contrasenia) {
      this.mensaje = 'Todos los campos son obligatorios.';
      return;
    }

    this.api.registrarUsuario(this.usuario).subscribe({
      next: (res: any) => {
        this.mensaje = res.mensaje;
      },
      error: (err) => {
        this.mensaje = 'Error al registrar usuario.';
      }
    });
  }
}
