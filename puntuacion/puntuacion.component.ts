import { Component } from '@angular/core';
import { CertamenesCelebradosService } from '../certamenes-celebrados.service';
import { ActivatedRoute } from '@angular/router';
import { Nota } from 'src/app/models/nota.model';


@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent {

  id:any;  
  notas:any

  constructor(private certamenService: CertamenesCelebradosService, private route: ActivatedRoute) { 
    this.route.params.subscribe(data => {
      this.id = data['id'];
    })

    if (this.id){
      this.certamenService.getNota(this.id).subscribe((res:Nota) => {
        this.notas = res
      })
    }

  }
}
