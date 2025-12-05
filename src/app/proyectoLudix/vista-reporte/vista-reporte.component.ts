import { Component, OnInit } from '@angular/core';
import { ProyectoapiService } from '../proyectoapi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vista-reporte',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './vista-reporte.component.html',
  styleUrls: ['./vista-reporte.component.css']
})

export class VistaReporteComponent implements OnInit {

  reportes: any[] = [];

  constructor(private api: ProyectoapiService) {}

  ngOnInit(): void {
    this.cargarReportes();
  }

  cargarReportes() {
    this.api.obtenerReporte().subscribe((res: any) => {
      this.reportes = res.reportes;
    });
  }
}
