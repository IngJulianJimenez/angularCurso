import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persaonaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  /**
   * se declara una varaible nueva con valores por defecto vacios
   * el @Input() es por que proviene data del archivo html que captura valores del formulario
   * la variable es de tipo Persaonaje
   * al definir el tipo de la variable se evita que ingresen valores extranios
   */  
  @Input()
  nuevo: Persaonaje = {
    nombre: '',
    poder: 0
  }

  /**
   * se instancia el servicio
   * variable >> dbzService
   * servicio >> DbzService
   * 
   * la variable debe cumplir con los parametros del servicio
   */

  constructor(private agregar_dbzService : DbzService){}

  /*
  agregar en un metodo que esta definido en el html

  con el if se evalua si hay un cmapo vacio o igual a 0, al pulsar el boton
  no realice ninguna accion

  si hay data al pulsar el boton se guarda el contenido en 'nuevo'
  la data se agrega al servicio, en el metodo agregarPersonaje

  por ultimo limpiar la data de la variable 'nuevo'

  */
  agregar(){

    if (this.nuevo.nombre.trim().length == 0) {
      return;  
    }

    //console.log(this.nuevo);
    //console.log(this.onNuevoPersonaje);    
    //this.onNuevoPersonaje.emit(this.nuevo);

    this.agregar_dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    }

    //console.log(this.nuevo);
  }

}
