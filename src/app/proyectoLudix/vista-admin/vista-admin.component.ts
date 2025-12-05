import { Component, OnInit } from '@angular/core';
import { ProyectoapiService } from '../proyectoapi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-vista-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterModule],
  templateUrl: './vista-admin.component.html',
  styleUrls: ['./vista-admin.component.css']
})
export class VistaAdminComponent implements OnInit {

  usuarios: any[] = [];
  usuarioSeleccionado: any = null;

  constructor(private api: ProyectoapiService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.api.obtenerUsuarios().subscribe((res: any) => {
      this.usuarios = res.usuarios;
    });
  }

  eliminar(id: number) {
    if (confirm("¿Seguro que deseas eliminar este usuario?")) {
      this.api.eliminarUsuario(id).subscribe(() => {
        this.cargarUsuarios();
      });
    }
  }

  seleccionarUsuario(user: any) {
    this.usuarioSeleccionado = { ...user }; // copia
  }

  cancelarEdicion() {
    this.usuarioSeleccionado = null;
  }

  guardarCambios() {
    this.api.actualizarUsuario(this.usuarioSeleccionado.id, this.usuarioSeleccionado)
      .subscribe(() => {
        alert("Usuario actualizado correctamente");
        this.usuarioSeleccionado = null;
        this.cargarUsuarios();
      });
  }
}
