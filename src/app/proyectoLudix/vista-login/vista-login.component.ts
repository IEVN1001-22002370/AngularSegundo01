import { Component } from '@angular/core';
import { ProyectoapiService } from '../proyectoapi.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vista-login',
  templateUrl: './vista-login.component.html',
  styleUrl: './vista-login.component.css',
  standalone: true,
  imports: [FormsModule]   // ← NECESARIO PARA ngModel
})
export class VistaLoginComponent {

  usuario: string = "";
  contrasena: string = "";
  errorMsg: string = "";

  constructor(private api: ProyectoapiService, private router: Router) {}

  onSubmit() {

    if (!this.usuario || !this.contrasena) {
      this.errorMsg = "Completa todos los campos";
      return;
    }

    const datos = {
      usuario: this.usuario,          // aquí va el correo realmente
      contrasenia: this.contrasena
    };

    this.api.login(datos).subscribe((resp: any) => {
      if (resp.exito) {

        localStorage.setItem("usuario", JSON.stringify(resp.usuario));
        this.router.navigate(['/proyectoLudix/perfil']);

      } else {
        this.errorMsg = resp.mensaje;
      }
    });
  }
}
