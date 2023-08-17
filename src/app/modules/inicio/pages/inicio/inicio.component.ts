import { Component, OnInit } from '@angular/core';
import { TarjetaLagos } from 'src/app/models/lagos';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
// propiedad publica (tipo array)
  public info: TarjetaLagos[]

  // inicializa la propiedad info
  constructor()  {
    this.info=[
      {
        titulo: "Lagos",
        descripcion: "Los siete lagos, Patagonia Argentina",
        imagen: "https://anbariloche1.cdn.net.ar/252/anbariloche/images/86/23/862328_848499e7d9741bbe00234e97881501a09b959ac809d4ce5175aea88763c48420/xs.webp",
        alt:"Lago Gutierrez"
      }
    ]
  }

// evento de construccion/inicializacion
  ngOnInit(): void{

  }
}
