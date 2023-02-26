import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  listadoHeroes: string[] = [];


  agregarHeroe(){
    const nombre: string = (<HTMLInputElement>document.getElementById("input")).value;
    this.listadoHeroes.push(nombre)
  }
}
