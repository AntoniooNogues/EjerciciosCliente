import { Component } from '@angular/core';

@Component({
  selector: 'app-interaccion-ventana2',
  standalone: true,
  imports: [],
  templateUrl: './interaccion-ventana2.component.html',
  styleUrl: './interaccion-ventana2.component.css'
})
export class InteraccionVentana2Component {
  crearVentana(){
    const ventana = window.open("", "_blank", "width=400, height=400");
  
  }
}
