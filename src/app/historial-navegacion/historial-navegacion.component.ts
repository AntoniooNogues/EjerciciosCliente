import { Component } from '@angular/core';

@Component({
  selector: 'app-historial-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './historial-navegacion.component.html',
  styleUrl: './historial-navegacion.component.css'
})
export class HistorialNavegacionComponent {
  
  haciaAtras() {
    window.history.back();
  }

  haciaAdelante() {
    window.history.forward();
  }
}
