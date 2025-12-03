import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
=======
import { VistaTestComponent } from "./proyectoLudix/vista-test/vista-test.component";
import { VistaVideosComponent } from "./proyectoLudix/vista-videos/vista-videos.component";
import { VistaSignUpComponent } from "./proyectoLudix/vista-sign-up/vista-sign-up.component";
import { VistaSimuladorComponent } from "./proyectoLudix/vista-simulador/vista-simulador.component";
import { VistaAdminComponent } from "./proyectoLudix/vista-admin/vista-admin.component";
import { VistaContactoComponent } from "./proyectoLudix/vista-contacto/vista-contacto.component";
import { VistaAnaliticaComponent } from "./proyectoLudix/vista-analitica/vista-analitica.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// import { ZodiacoComponent } from "./formularios/zodiaco/zodiaco.component";
// import { DistanciaComponent } from "./formularios/distancia/distancia.component";
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';

    ngOnInit(): void {
    initFlowbite();
  }
}


