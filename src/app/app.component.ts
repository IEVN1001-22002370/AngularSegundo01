import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";
import { VistaTestComponent } from "./proyectoLudix/vista-test/vista-test.component";
import { VistaVideosComponent } from "./proyectoLudix/vista-videos/vista-videos.component";
import { VistaSignUpComponent } from "./proyectoLudix/vista-sign-up/vista-sign-up.component";
import { VistaSimuladorComponent } from "./proyectoLudix/vista-simulador/vista-simulador.component";
import { VistaAdminComponent } from "./proyectoLudix/vista-admin/vista-admin.component";
import { VistaContactoComponent } from "./proyectoLudix/vista-contacto/vista-contacto.component";
import { VistaAnaliticaComponent } from "./proyectoLudix/vista-analitica/vista-analitica.component";

// import { ZodiacoComponent } from "./formularios/zodiaco/zodiaco.component";
// import { DistanciaComponent } from "./formularios/distancia/distancia.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, VistaAnaliticaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';

    ngOnInit(): void {
    initFlowbite();
  }
}


