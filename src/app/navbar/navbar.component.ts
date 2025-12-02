import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
score: any;
getScorePercentage() {
throw new Error('Method not implemented.');
}
shareResults() {
throw new Error('Method not implemented.');
}
resetGame() {
throw new Error('Method not implemented.');
}

}
