import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha-hora-component',
  standalone: true,
  imports: [],
  templateUrl: './fecha-hora-component.component.html',
  styleUrl: './fecha-hora-component.component.css'
})
export class FechaHoraComponentComponent {
  fecha: Date;

  constructor() {
    this.fecha = new Date();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.actualizarFechaHora();
    }, 1000);
  }

  toString(): string {
    return this.fecha.toISOString().replace('T', ' ').substring(0, 19);
  }

  actualizarFechaHora(): void {
    this.fecha = new Date();
  }
}
