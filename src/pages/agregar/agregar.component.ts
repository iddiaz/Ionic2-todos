import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from './../../app/clases/index'
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {
  nombreLista: string = '';
  nombreItem: string = '';

  items: ListaItem[] = [];
  listas: Lista[] = [];

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private listaDeseos: ListaDeseosService
  ) { }

  ngOnInit() { }

  agregar(){
    if(this.nombreItem.length === 0 ){
      return;
    }
    let item = new ListaItem();
    item.nombre = this.nombreItem;
    this.items.push( item );
    this.nombreItem = '';

  }

  borrarItem( index: number ) {    
    this.items.splice( index, 1 );    
  }

  guardarLista() {
    if (this.nombreLista.length === 0) {
      let alert = this.alertCtrl.create({
        title: 'Atención!',
        subTitle: 'El nombre de la lista es necesario',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let lista = new Lista( this.nombreLista );
    lista.items = this.items;
    // this.listaDeseos.listas.push( lista );
    this.listaDeseos.agregarLista( lista );
    this.navCtrl.pop();

  }

}