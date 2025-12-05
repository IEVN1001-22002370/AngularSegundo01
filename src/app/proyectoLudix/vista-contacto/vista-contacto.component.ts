import { Component } from '@angular/core';
import { ProyectoapiService } from '../proyectoapi.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vista-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './vista-contacto.component.html',
  styleUrl: './vista-contacto.component.css'
})
export class VistaContactoComponent {

  nombre = "";
  email = "";
  mensaje = "";

  constructor(private api: ProyectoapiService) {}

  enviarReporte() {
    const data = {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje
    };

    this.api.registrarReporte(data).subscribe( (res:any) => {
      if(res.exito){
        alert("Reporte enviado correctamente");
        this.nombre = "";
        this.email = "";
        this.mensaje = "";
      } else {
        alert("Error: " + res.mensaje);
      }
    });
  }
}
