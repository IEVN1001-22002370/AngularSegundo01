import { Component } from '@angular/core';
import { ProyectoapiService } from '../proyectoapi.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vista-login',
  templateUrl: './vista-login.component.html',
  styleUrl: './vista-login.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class VistaLoginComponent {

  correo: string = "";
  contrasenia: string = "";
  errorMsg: string = "";

  constructor(private api: ProyectoapiService, private router: Router) {}

  onSubmit() {
    if (!this.correo || !this.contrasenia) {
      this.errorMsg = "Completa todos los campos.";
      return;
    }

    const datos = {
      correo: this.correo,
      contrasenia: this.contrasenia
    };

    this.api.login(datos).subscribe((resp: any) => {

      if (resp.exito) {
        // Guardar sesión
        localStorage.setItem("usuario", JSON.stringify(resp.usuario));

        // Redirigir
        this.router.navigate(['/proyectoLudix/perfil']);
      } else {
        this.errorMsg = resp.mensaje;
      }

    }, err => {
      this.errorMsg = "Error al conectar con el servidor.";
    });
  }
}
