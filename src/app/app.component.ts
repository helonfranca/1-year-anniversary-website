// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TimelineComponent } from "./timeline/timeline.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    TimelineComponent

],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigir para styleUrls
})
export class AppComponent {
  title = '💛';
}
