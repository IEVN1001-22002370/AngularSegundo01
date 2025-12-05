import { Component } from '@angular/core';
import { ProyectoapiService } from '../proyectoapi.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vista-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vista-login.component.html',
  styleUrl: './vista-login.component.css',
})
export class VistaLoginComponent {
  correo: string = '';
  contrasenia: string = '';
  error: string = '';

  constructor(private api: ProyectoapiService, private router: Router) {}

  onSubmit() {
    if (!this.correo || !this.contrasenia) {
      this.error = 'Debes llenar todos los campos';
      return;
    }

    this.api.login(this.correo, this.contrasenia).subscribe((resp: any) => {
      if (resp.exito) {
        localStorage.setItem('usuario', JSON.stringify(resp.usuario));

        this.router.navigate(['/proyectoLudix/home']);
      } else {
        this.error = resp.mensaje;
      }
    });
  }
}
