// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TimelineComponent } from "./timeline/timeline.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    TimelineComponent,
    FooterComponent,
    AboutComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigir para styleUrls
})
export class AppComponent {
  title = '💛';
}
