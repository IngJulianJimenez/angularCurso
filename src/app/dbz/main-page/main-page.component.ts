import { Component } from '@angular/core';
import { Persaonaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  
  /*
  arreglo de personajesPAPA
  un arreglo que contiene varios objetos
  el arerglo es de tipo  Persaonaje (objeto, plantilla interface)
  para el ejempo tiene data, pero puede estar vacio
  */
  personajesPAPA: Persaonaje [] = [
    {
      nombre: 'Krilin',
      poder: 70
    },
    {
      nombre: 'Goku',
      poder: 1500
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ]

  
}
