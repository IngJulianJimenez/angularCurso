import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <h1>Ejercicio uno</h1>
    <button (click)="acumular(1)">+1</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-1)">-1</button>

    <h1>Ejercicio dos</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <button (click)="acumular_(1 * base)">+{{ base }}</button>
    <span>{{ resultado }}</span>
    <button (click)="acumular_(-1 * base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  // ejercicio uno
  title: string = 'Hola Mundo';
  numero: number = 10;
  acumular(valor: number) {
    this.numero += valor;
  }

  // ejercicio dos
  base: number = 5;
  resultado: number = 0;
  acumular_(acumulador: number) {
    this.resultado += acumulador;
  }
}
