import { Component } from '@angular/core';
import { ListaDeBandasService } from '../lista-de-bandas.service';
import { ActivatedRoute } from '@angular/router';
import { Banda } from 'src/app/models/banda.model';

@Component({
  selector: 'app-lista-de-bandas',
  templateUrl: './lista-de-bandas.component.html',
  styleUrls: ['./lista-de-bandas.component.css']
})
export class ListaDeBandasComponent {
  
  id:any;  
  bandas:any

  constructor(private bandasServicio: ListaDeBandasService, private route: ActivatedRoute){
    this.route.params.subscribe(data => {
      this.id = data['id'];
    })

    if (this.id){
      this.bandasServicio.getNombre(this.id).subscribe((res:Banda) => {
        this.bandas = res
      })
    }
  }

  
}
