import { Injectable } from '@angular/core';
import { Persaonaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
  /*
  El arreglo _personajesServicio contiene la estructura 
  la palantilla de la estructura se define en la interface Persaonaje
  se dice que _personajesServicio es de tipo Persaonaje
  
  para el ejemplo se tiene un arreglo de objetos
  Al dejar el array vacio el comportamiento del programa no cambia

  el servicio debe tener un constructor para  acceder a los metodo get y set
  
  */
  private _personajesServicio: Persaonaje[] = [
    {
      nombre: 'Krilin',
      poder: 70,
    },
    {
      nombre: 'Goku',
      poder: 1500,
    },
    {
      nombre: 'Vegeta',
      poder: 8500,
    },
  ];

  constructor() {
    //console.log('servicio arriba');
  }

  /**
   * metodo get para obtener la data del arreglo _personajesServicio
   * el metodo get se invoca desde los componentes que necesiten la informacion del arreglo
  */
  get personajesServicio(): Persaonaje[] {
    return [...this._personajesServicio];
  }

  /**
   * metodo agregarPersonaje ingresar data al arreglo _personajesServicio
   * como parametro se recibe una variable de tipo Persaonaje
   * el metodo se invoca desde el componente que agregue informacion al arreglo
  */
  agregarPersonaje(personaje: Persaonaje){
    this._personajesServicio.push(personaje);
  }
  
}
