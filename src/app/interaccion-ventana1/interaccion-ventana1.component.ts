import { Component } from '@angular/core';
import { InteraccionVentana2Component } from "../interaccion-ventana2/interaccion-ventana2.component";


@Component({
  selector: 'app-interaccion-ventana1',
  standalone: true,
  imports: [InteraccionVentana2Component],
  templateUrl: './interaccion-ventana1.component.html',
  styleUrl: './interaccion-ventana1.component.css'
})

export class InteraccionVentana1Component {

  crearVentana(){
    const ventana = window.open("", "_blank", "width=1600, height=800");
    ventana?.addEventListener('resize', () => {
      ventana.document.body.innerHTML = `Resolución actual de la ventana: ${ventana.outerWidth}x${ventana.outerHeight}`;
    });
  }
}
