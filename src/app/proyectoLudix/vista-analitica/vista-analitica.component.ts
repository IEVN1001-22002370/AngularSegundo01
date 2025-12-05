import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../../services/analytics.service';
import Chart from 'chart.js/auto';
import { RouterLink, RouterModule } from "@angular/router";


@Component({
  selector: 'app-vista-analitica',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './vista-analitica.component.html',
  styleUrls: ['./vista-analitica.component.css']
})
export class VistaAnaliticaComponent implements OnInit {

  visitsToday = 0;
  visitsThisMonth = 0;
  avgVisitDuration = '';
  bounceRate = '';

  trafficSources: any[] = [];
  popularPages: any[] = [];
  visitasPorDia: any[] = [];

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this.analyticsService.getAnalytics().subscribe(data => {

      this.visitsToday = data.totales.visitasHoy;
      this.visitsThisMonth = data.totales.visitasMes;
      this.avgVisitDuration = data.totales.duracionPromedio;
      this.bounceRate = data.totales.rebote;

      this.trafficSources = data.fuentes;
      this.popularPages = data.paginasPopulares;
      this.visitasPorDia = data.visitasPorDia;

      this.createChart();
    });
  }

  createChart() {
    const labels = this.visitasPorDia.map(d => d.fecha);
    const values = this.visitasPorDia.map(d => d.visitas);

    new Chart("visitasChart", {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
          label: "Visitas por día",
          data: values,
          borderWidth: 3,
          tension: 0.2,
          fill: true
        }]
      }
    });
  }
}
