import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vista-analitica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vista-analitica.component.html',
  styleUrls: ['./vista-analitica.component.css']
})
export class VistaAnaliticaComponent {

  visitsToday = 482;
  visitsThisMonth = 10240;
  avgVisitDuration = '3m 12s';
  bounceRate = '37%';

  trafficSources = [
    { name: 'Búsqueda orgánica', percent: 54 },
    { name: 'Redes sociales', percent: 26 },
    { name: 'Tráfico directo', percent: 15 },
    { name: 'Referencias', percent: 5 },
  ];

  popularPages = [
    { page: '/inicio', views: 1340 },
    { page: '/blog/mejores-juegos', views: 890 },
    { page: '/contacto', views: 410 },
  ];
}
