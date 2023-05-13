import { Component } from '@angular/core';
import { TodasLasBandasService } from '../todas-las-bandas.service';

@Component({
  selector: 'app-todas-las-bandas',
  templateUrl: './todas-las-bandas.component.html',
  styleUrls: ['./todas-las-bandas.component.css']
})
export class TodasLasBandasComponent {

  constructor(private todasLasBandas: TodasLasBandasService){}

  getBandas(){
    return this.todasLasBandas.getNombre()
  }
}
