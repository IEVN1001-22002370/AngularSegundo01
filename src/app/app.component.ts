import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  // Si usas standalone components y tu app los necesita, añade los imports necesarios.
  imports: [RouterOutlet, NavbarComponent, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AngularSegundo01';

  ngOnInit(): void {
    initFlowbite();

    let isReload = false;
    try {
      const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navEntries && navEntries.length > 0) {
        isReload = navEntries[0].type === 'reload';
      } else if ((performance as any).navigation) {
        isReload = (performance as any).navigation.type === 1;
      }
    } catch (e) {
      console.warn('No se pudo detectar navigation type:', e);
    }

    if (isReload) {
      localStorage.removeItem('descargaClick');
      console.log('AppComponent: detectado RELOAD → borrada clave descargaClick');
    } else {
      console.log('AppComponent: no es reload → no borramos clave descargaClick');
    }
  }
}
