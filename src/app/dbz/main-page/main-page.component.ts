import { Component } from '@angular/core';
import { Persaonaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  /*
  El arreglo de personajesPAPA  contiene la estructura padre 
  la palantilla de la estructura se define en la interface Persaonaje
  
  Para el ejemplo se tiene un arreglo de objetos
  Al dejar el array vacio el comportamiento del programa no cambia
  */
  personajesPAPA: Persaonaje[] = [
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
  
  /**
   * Se crea una nueva variable con la estructura para agregar un nuevo personaje
   * tambien usa la plantilla ya definida
   * la variable se encarga de capturar lo que esta en el html
   * 
   * se crea un evento agregarNuevoPersonaje, encargado de agregar el nuevo personaje en el front
   * lo que recibe lo envia a personajesPAPA
   * 
   */
  nuevoPersonaje: Persaonaje = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje(argumento: Persaonaje){
    //console.log(argumento);
    this.personajesPAPA.push(argumento)
  }

}
