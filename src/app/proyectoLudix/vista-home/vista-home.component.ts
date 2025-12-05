import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-vista-home',
  imports: [RouterLink],
  templateUrl: './vista-home.component.html',
  styleUrl: './vista-home.component.css',
})
export class VistaHomeComponent {
  constructor(private router: Router) {}

  descargarJuego() {
    const alreadyClicked = localStorage.getItem('descargaClick');

    if (!alreadyClicked) {
      localStorage.setItem('descargaClick', '1');
      this.router.navigate(['/proyectoLudix/login']);
    } else {
      this.router.navigate(['/proyectoLudix/pasarela']);
    }
  }
}
