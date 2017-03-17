import { Lista } from './../../app/clases/listas';
import { Injectable } from '@angular/core';

@Injectable()
export class ListaDeseosService {

  listas: Lista[] = [];

  constructor() {
    
    // let lista1 = new Lista('Compras de supermecado');
    // let lista2 = new Lista('Juegos que deseo');
    // let lista3 = new Lista('Cosas de la casa');

    // this.listas.push( lista1 );
    // this.listas.push( lista2 );
    // this.listas.push( lista3 );

    this.cargarData();


    console.log('servicio inicializado');
  }

  actualizarData(){
    localStorage.setItem( 'data', JSON.stringify( this.listas ) );
    // console.log('ActulizarData: ', this.listas);
  }

  cargarData() {
    if(localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  agregarLista( lista: Lista ) {
    this.listas.push(lista);
    this.actualizarData();
  }

  eliminarLista( index: number ){
    this.listas.splice(index, 1);
    this.actualizarData();
  }

}