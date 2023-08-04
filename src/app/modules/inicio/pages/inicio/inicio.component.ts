import { Component, OnInit } from '@angular/core';
import { TarjetasInicio } from 'src/app/models/modelos';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
// propiedad publica (tipo array)
  public info: TarjetasInicio[]

  // inicializa la propiedad info
  constructor()  {
    this.info=[
      {
        titulo: "tarjeta 1",
        descripcion: "Gato, pelo blanco machado.",
        imagen: "https://estaticos-cdn.prensaiberica.es/clip/ce847ef4-8930-42e0-9c1d-9929902d3820_16-9-discover-aspect-ratio_default_0.jpg",
        alt:"Michi"
      }
    ]
  }

// evento de construccion/inicializacion
  ngOnInit(): void{

  }
}
