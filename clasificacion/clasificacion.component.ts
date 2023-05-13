import { Component } from '@angular/core';
import { CertamenesCelebradosService } from '../certamenes-celebrados.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent {

  id:any

  constructor(private certamenesServicio: CertamenesCelebradosService, private router: Router){}

  getCertamenes(){
    return this.certamenesServicio.getNombre()
  }

  verPuntuacion(id:string){
    this.router.navigate(['/puntuacion', id])
  }
}
