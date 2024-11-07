import { Component } from '@angular/core';

@Component({
  selector: 'app-numero-aleatorio-component',
  standalone: true,
  imports: [],
  templateUrl: './numero-aleatorio-component.component.html',
  styleUrl: './numero-aleatorio-component.component.css'
})
export class NumeroAleatorioComponentComponent {
  
  numero: string;

  constructor() {
    this.numero = "Pulsa el boton para generar un numero aleatorio";
  }

  generarNumeroAleatorio() {
    this.numero = Math.floor(Math.random() * 100).toString();
  }
}
