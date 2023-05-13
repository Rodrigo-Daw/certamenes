import { Component } from '@angular/core';
import { ListaDeBandasService } from '../lista-de-bandas.service';

@Component({
  selector: 'app-lista-de-bandas',
  templateUrl: './lista-de-bandas.component.html',
  styleUrls: ['./lista-de-bandas.component.css']
})
export class ListaDeBandasComponent {

  constructor(private bandasServicio: ListaDeBandasService){}

  getBandas(){
    return this.bandasServicio.getNombre()
  }
}
