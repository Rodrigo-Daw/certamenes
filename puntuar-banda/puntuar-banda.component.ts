import { Component } from '@angular/core';
import { CertamenesCelebradosService } from '../certamenes-celebrados.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-puntuar-banda',
  templateUrl: './puntuar-banda.component.html',
  styleUrls: ['./puntuar-banda.component.css']
})
export class PuntuarBandaComponent {

  id:any

  constructor(private certamenesServicio: CertamenesCelebradosService, private router: Router){}

  getCertamenes(){
    return this.certamenesServicio.getNombre()
  }

  verBandas(id:string){
    this.router.navigate(['/listarPorCertamen', id])
  }
}
