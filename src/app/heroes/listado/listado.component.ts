import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Iroman','Hulk', 'Thor'];
  heroeBorrado: string = '';
  
  borrarHeroe(){
    console.log('Borrar Heroe')
    //const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() ||'';


    //verificar por consola el elementroi borrado
    //console.log(heroeBorrado)

  }
}
