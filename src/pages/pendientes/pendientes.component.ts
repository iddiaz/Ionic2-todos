import { AgregarComponent } from './../agregar/agregar.component';
import { ListaDeseosService } from './../../app/services/lista-deseos.services';
import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetalleComponent } from './../detalle/detalle.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {
  constructor( 
    private listaDeseos: ListaDeseosService,
    private navCtrl: NavController ) { }

  ngOnInit() {}

  irAgregar(){
    this.navCtrl.push( AgregarComponent )
  }

  verDetalle(lista, index ){
    this.navCtrl.push( DetalleComponent, {  lista, index } )
      // lista: lista,
      // index: index
      //en es6 esto es redundante por lo que lo dejamos mejor
     
   

  }
}