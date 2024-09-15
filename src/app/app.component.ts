// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from './components/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatDialogModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigir para styleUrls
})
export class AppComponent {
  title = '💛';
}
