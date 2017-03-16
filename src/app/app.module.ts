import { PlaceHolderPipe } from './pipes/placeholder.pipe';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { ListaDeseosService } from './services/lista-deseos.services';

import { PendientesComponent } from './../pages/pendientes/pendientes.component';
import { TerminadosComponent } from './../pages/terminados/terminados.component';
import { AgregarComponent } from './../pages/agregar/agregar.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    PlaceHolderPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent
  ],
  providers: [
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
