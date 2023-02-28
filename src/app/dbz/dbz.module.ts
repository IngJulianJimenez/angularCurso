import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.services';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  //componentes que se hacen visibles y se pueden consumir desde el app.component.html
  exports:[
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  providers:[
    DbzService
  ]
})
export class DbzModule { }
