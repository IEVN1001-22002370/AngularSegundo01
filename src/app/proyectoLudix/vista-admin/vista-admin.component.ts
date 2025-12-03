<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ProyectoapiService } from '../proyectoapi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
=======
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaAnalyticsComponent } from '../vista-analytics/vista-analytics.component';
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18

@Component({
  selector: 'app-vista-admin',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, FormsModule],
=======
  imports: [
    CommonModule,
    VistaAnalyticsComponent
  ],
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
  templateUrl: './vista-admin.component.html',
  styleUrls: ['./vista-admin.component.css']
})
export class VistaAdminComponent implements OnInit {

<<<<<<< HEAD
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
=======
  section: string = 'dashboard';
  title: string = 'Dashboard';

  selectSection(section: string) {
    this.section = section;

    const titles: Record<string, string> = {
      dashboard: 'Dashboard',
      posts: 'Gestión de Entradas',
      media: 'Biblioteca Multimedia',
      users: 'Usuarios del Sistema',
      settings: 'Configuraciones',
      analytics: 'Analítica'
    };

    this.title = titles[section];
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
  }
}
