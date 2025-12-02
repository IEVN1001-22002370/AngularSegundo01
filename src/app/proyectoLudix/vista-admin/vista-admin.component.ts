import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaAnalyticsComponent } from '../vista-analytics/vista-analytics.component';

@Component({
  selector: 'app-vista-admin',
  standalone: true,
  imports: [
    CommonModule,
    VistaAnalyticsComponent
  ],
  templateUrl: './vista-admin.component.html',
  styleUrls: ['./vista-admin.component.css']
})
export class VistaAdminComponent {

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
  }
}
