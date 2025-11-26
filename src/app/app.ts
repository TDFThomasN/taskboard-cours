import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

@Component({​
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Home, About],​
  template: `​
    <nav style="padding:.5rem; border-bottom:1px solid #ddd;">​
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Accueil</a> |​
      <a routerLink="/about" routerLinkActive="active">À propos</a>​
    </nav>​
​
    <main style="padding:1rem;">​
      <router-outlet></router-outlet>
    </main>
  `
})

export class App {
  protected readonly title = signal('TaskBoard_Pro');
}
