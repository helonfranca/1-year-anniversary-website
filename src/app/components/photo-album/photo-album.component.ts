import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-album',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './photo-album.component.html',
  styleUrl: './photo-album.component.css'
})
export class PhotoAlbumComponent {
  memories = [
    { title: 'Primeiro Encontro', subtitle: 'Café no Parque', description: 'Foi um dia especial...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Viagem Juntos', subtitle: 'Fim de Semana', description: 'Nossa primeira viagem...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Primeiro Encontro', subtitle: 'Café no Parque', description: 'Foi um dia especial...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Viagem Juntos', subtitle: 'Fim de Semana', description: 'Nossa primeira viagem...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Primeiro Encontro', subtitle: 'Café no Parque', description: 'Foi um dia especial...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Viagem Juntos', subtitle: 'Fim de Semana', description: 'Nossa primeira viagem...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Primeiro Encontro', subtitle: 'Café no Parque', description: 'Foi um dia especial...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Viagem Juntos', subtitle: 'Fim de Semana', description: 'Nossa primeira viagem...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Primeiro Encontro', subtitle: 'Café no Parque', description: 'Foi um dia especial...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Viagem Juntos', subtitle: 'Fim de Semana', description: 'Nossa primeira viagem...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Primeiro Encontro', subtitle: 'Café no Parque', description: 'Foi um dia especial...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Viagem Juntos', subtitle: 'Fim de Semana', description: 'Nossa primeira viagem...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Primeiro Encontro', subtitle: 'Café no Parque', description: 'Foi um dia especial...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Viagem Juntos', subtitle: 'Fim de Semana', description: 'Nossa primeira viagem...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Primeiro Encontro', subtitle: 'Café no Parque', description: 'Foi um dia especial...', image: 'assets/img/abril.jpg', flipped: false },
    { title: 'Viagem Juntos', subtitle: 'Fim de Semana', description: 'Nossa primeira viagem...', image: 'assets/img/abril.jpg', flipped: false },
    // Adicione mais memórias aqui
  ];

  toggleFlip(memory: any) {
    console.log('clicou');
    memory.flipped = !memory.flipped;
  }
}
