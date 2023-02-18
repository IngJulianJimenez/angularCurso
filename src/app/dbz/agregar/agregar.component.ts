import { Component, Input } from '@angular/core';
import { Persaonaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  /**
   * se recibe un arreglo de objetos del padre
   * realmente lo que se recibe es la estructura,
   * puede estar vacio o con data
   * se indica que el arreglo es de tipo Persaonaje, es un arreglo de objetos
   */
  @Input()
  personajes: Persaonaje [] = [];
  
  @Input()
  nuevo: Persaonaje = {
    nombre: '',
    poder: 0
  }

  /*
  el if valida si hay data hace la operacion
  con el push se inserta en la tabla, lo que esta en el formulario
  con el arreglo this.nuevo, se limpia el formulario
  */
  agregar(){
    if (this.nuevo.nombre.trim().length == 0) {
      return;  
    }

    console.log(this.nuevo);

    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    }

    //console.log(this.nuevo);
  }

}
