import { Component } from '@angular/core';
import { ProximosCertamenesService } from '../proximos-certamenes.service';

@Component({
  selector: 'app-proximos-certamenes',
  templateUrl: './proximos-certamenes.component.html',
  styleUrls: ['./proximos-certamenes.component.css']
})
export class ProximosCertamenesComponent {


  constructor(private certamenesServicio: ProximosCertamenesService){}

  getCertamenes(){
    return this.certamenesServicio.getNombre()
  }
}
