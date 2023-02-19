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
   * se indica que es un arreglo de objetos (interface Persaonaje)
   * 
   * la variable tiene el mismo nombre en el html
   */
  @Input()
  personajes: Persaonaje [] = [];


  /**
   * se declara una varaible nueva con valores por defecto vacios
   * el @Input() es por que proviene data del archivo html que captura valores del formulario
   */  
  @Input()
  nuevo: Persaonaje = {
    nombre: '',
    poder: 0
  }

  /*
  agregar en un metodo que esta definido en el html

  con el if se evalua si hay un cmapo vacio o igual a 0, al pulsar el boton
  no realice ninguna accion

  si hay data al pulsar el boton se guarda el contenido de 'nuevo' en la varible 'personajes'
  'personajes' tiene conexion directa con el html (front)
  al modificar esta variable o agregar valores se ve su cambio en el front

  por ultimo limpiar la data de la variable 'nuevo'

  */
  agregar(){

    if (this.nuevo.nombre.trim().length == 0) {
      return;  
    }

    //console.log(this.nuevo);
    //console.log(this.personajes);
    
    this.personajes.push(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    }

    //console.log(this.nuevo);
  }

}
