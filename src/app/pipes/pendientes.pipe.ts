import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from "../clases/index";

@Pipe({
  name: 'pendientes',
  //por defecto los pipes son puros, pero necesitamos un pipe impuro para que esté pendiente de los cambios que se producen en la lista
  pure: false
})
export class PendientesPipe  implements PipeTransform {
  transform(listas: Lista[], estado: boolean = false ): Lista[] {
    
    let nuevaLista: Lista[] = [];
    
    for(let lista of listas ){
     
      if(lista.terminada == estado){
        nuevaLista.push( lista )
        // console.log(lista);
      }
    }
    return nuevaLista;
  }
}