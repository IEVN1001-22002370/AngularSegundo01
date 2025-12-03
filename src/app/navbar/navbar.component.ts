import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
<<<<<<< HEAD
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
=======
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

>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
}
