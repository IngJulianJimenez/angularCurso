import { Component } from '@angular/core';
import { Persaonaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  /**
   * Se crea una nueva variable de tipo Persaonaje
   * la variable se encarga de capturar lo que este en el formaualrio html al pulsar el boton
   *
   */
  nuevoPersonaje: Persaonaje = {
    nombre: '',
    poder: 0
  }

  //constructor(private dbzService: DbzService){}

}
