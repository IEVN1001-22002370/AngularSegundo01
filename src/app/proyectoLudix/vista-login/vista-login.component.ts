import { Component } from '@angular/core';
import { ProyectoapiService } from '../proyectoapi.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-vista-login',
  templateUrl: './vista-login.component.html',
  styleUrl: './vista-login.component.css',
  standalone: true,
})
export class VistaLoginComponent {

  usuario: string = '';
  contrasena: string = '';
  errorMsg: string = '';

  constructor(private api: ProyectoapiService, private router: Router) {}

  onSubmit() {
    if (!this.usuario || !this.contrasena) {
      this.errorMsg = 'Completa todos los campos';
      return;
    }

    const datos = {
      usuario: this.usuario,
      contrasenia: this.contrasena,
    };

    this.api.login(datos).subscribe((resp: any) => {
      if (resp.exito) {
        // Guardamos sesión
        localStorage.setItem('usuario', JSON.stringify(resp.usuario));

        // Redirigir al home / perfil
        this.router.navigate(['/proyectoLudix/perfil']);
      } else {
        this.errorMsg = resp.mensaje;
      }
    });
  }
}
