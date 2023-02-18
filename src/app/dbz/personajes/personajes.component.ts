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
   * la archivo .ts pasa la data al .html
   * 
   * la ubicaicon del template .html se indica en la parte superior
   */
  @Input()
  personajeshijo: any [] = []
}
