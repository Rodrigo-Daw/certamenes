import { Component } from '@angular/core';
import { ProximosCertamenesService } from '../proximos-certamenes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-proximos-certamenes',
  templateUrl: './proximos-certamenes.component.html',
  styleUrls: ['./proximos-certamenes.component.css']
})
export class ProximosCertamenesComponent {


  constructor(private certamenesServicio: ProximosCertamenesService, private router: Router){}

  getCertamenes(){
    return this.certamenesServicio.getNombre()
  }

  verBandas(id:string){
    this.router.navigate(['/listaDeBandas', id])
  }
}
