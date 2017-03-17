
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ListaItem, Lista } from "../../app/clases/index";
import { ListaDeseosService } from '../../app/services/lista-deseos.services';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  idx: number;
  lista: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private listaDeseos: ListaDeseosService,
    private alertCtrl: AlertController
  ) {
    console.log(this.navParams);

    this.idx = this.navParams.get('index');
    this.lista = this.navParams.get('lista');
   }

  ngOnInit() { }

  actualizar( item: ListaItem ){
    item.completado = !item.completado;
    
    let todosMarcados = true;
    for( let item of this.lista.items ) {
      if(!item.completado ) {
        todosMarcados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcados;

    // console.log('console log en actualizar ', this.lista);
    this.listaDeseos.actualizarData();
  }

 

  borrarItem(){
     let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: '¿Está seguro que desea eliminar la lista?',
      buttons: [
        'Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            console.log('Agree clicked');
            this.listaDeseos.eliminarLista( this.idx );
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

  
}