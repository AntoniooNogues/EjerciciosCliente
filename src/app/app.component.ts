import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FechaHoraComponentComponent } from "./fecha-hora-component/fecha-hora-component.component";
import { NumeroAleatorioComponentComponent } from './numero-aleatorio-component/numero-aleatorio-component.component';
import { HistorialNavegacionComponent } from "./historial-navegacion/historial-navegacion.component";
import { InteraccionVentana1Component } from "./interaccion-ventana1/interaccion-ventana1.component";
import { InteraccionVentana2Component } from "./interaccion-ventana2/interaccion-ventana2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaHoraComponentComponent, NumeroAleatorioComponentComponent, HistorialNavegacionComponent, InteraccionVentana1Component, InteraccionVentana2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicios1-2_AntonioNogues';
}
