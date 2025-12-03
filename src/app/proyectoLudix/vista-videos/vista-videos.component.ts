import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-vista-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vista-videos.component.html',
  styleUrls: ['./vista-videos.component.css']
})
export class VistaVideosComponent {

  constructor(private sanitizer: DomSanitizer) {}

  videos = [
    {
      id: "mbEin7RmL_Y",
      title: "Bienvenido a Ludix",
      description: "Conoce la plataforma y sus funciones."
    },
    {
      id: "mbEin7RmL_Y",
      title: "Minijuego de pronunciación",
      description: "Demostración de unos de los minijuegos de Ludix."
    }
  ];

  selectedVideo: any = null;
  safeUrl!: SafeResourceUrl;

  selectVideo(video: any) {
    this.selectedVideo = video;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${video.id}`
    );
  }
}
