import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vista-perfil',
  imports: [RouterLink,RouterLink, FormsModule],
  templateUrl: './vista-perfil.component.html',
  styleUrl: './vista-perfil.component.css'
})
export class VistaPerfilComponent implements OnInit {

  userId: number = 0;
  nombre: string = "";
  correo: string = "";
  constrasenia: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.userId = Number(localStorage.getItem("userId"));
    this.nombre = localStorage.getItem("userNombre") ?? "";
    this.correo = localStorage.getItem("userCorreo") ?? "";
  }

  actualizarUsuario(campo: string) {
    const cuerpo = {
      nombre: this.nombre,
      correo: this.correo,
      contraseña: this.constrasenia
    };

    this.http.put(`http://localhost:5000/usuarios/${this.userId}`, cuerpo)
      .subscribe({
        next: (resp) => {
          alert(`Se actualizó tu ${campo} correctamente`);

          // Actualiza localStorage
          localStorage.setItem("userNombre", this.nombre);
          localStorage.setItem("userCorreo", this.correo);
        },
        error: () => alert("Error al actualizar usuario")
      });
  }

}
