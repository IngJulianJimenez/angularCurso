import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"; 
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //componentes
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //compontes que deseo hacer visibles
    exports:[
        HeroeComponent,
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]

})
export class HeroesModule {}