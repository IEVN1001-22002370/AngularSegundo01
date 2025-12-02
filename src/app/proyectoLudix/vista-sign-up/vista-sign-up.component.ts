import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vista-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vista-sign-up.component.html',
  styleUrls: ['./vista-sign-up.component.css']
})
export class VistaSignUpComponent {
  nombre = '';
  correo = '';
  contraseña = '';
  cargando = false;

  constructor(private http: HttpClient) {}

  registrar() {
    if (!this.nombre || !this.correo || !this.contraseña) {
      alert('Completa todos los campos');
      return;
    }

    this.cargando = true;
    this.http.post('http://localhost:5000/signup', {
      nombre: this.nombre,
      correo: this.correo,
      contraseña: this.contraseña
    }).subscribe({
      next: (res: any) => {
        alert(res.mensaje);
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Error en el registro');
        this.cargando = false;
      }
    });
  }
  
}
