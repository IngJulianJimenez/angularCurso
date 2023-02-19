import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  
  /**
   * con el @Input() se le indica a angular 
   * que la data proviene de un componente externo (padre)
   * el archivo .ts pasa la data al .html
   * 
   * Se recibe un array y su estructura, con o sin data
   * 
   * la ubicacion del template .html se indica en la parte superior
   * 
   * la variable tiene el mismo nombre en el html
   * 
   * el componente app-personajes, deberia llamarse mostrar personjes
   * es la funcion que hace
   */
  @Input()
  personajeshijo: any [] = []
}
