import { Component } from '@angular/core';
import { CertamenesCelebradosService } from '../certamenes-celebrados.service';
import { ActivatedRoute } from '@angular/router';
import { BandaPorCertamen } from 'src/app/models/bandaPorCertamen.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";

@Component({
  selector: 'app-listar-por-certamen',
  templateUrl: './listar-por-certamen.component.html',
  styleUrls: ['./listar-por-certamen.component.css']
})
export class ListarPorCertamenComponent {

  id:any; 
  banda_select:any
  bandas:any
  nota:any
  notaOK = true

  constructor(private certamenService: CertamenesCelebradosService, private route: ActivatedRoute, 
    private snackBar: MatSnackBar, private router: Router) { 
    this.route.params.subscribe(data => {
      this.id = data['id']; 
    })

   if (this.id){ 
      this.certamenService.getNota(this.id).subscribe((res:BandaPorCertamen) => {
        this.bandas = res
      })
    } 

  }

  calificar(banda:any){
    
    console.log(banda.banda_id)
    return this.certamenService.puntuarBanda(banda.banda_id, banda.nota).subscribe((res: any) => {
        this.bandas = res
    })
  }

  rellenar(banda:any){
    if(!banda.nota){
      this.notaOK = false
      this.snackBar.open("Falta la nota de la banda", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }else if(banda.nota>10 || banda.nota<0){
      this.notaOK = false
      this.snackBar.open("La nota debe estar entre 0 y 10", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }else{
      this.calificar(banda)
      this.snackBar.open("Banda puntuada correctamente", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
  }

  notaCorregida(){
    this.notaOK = true
  }
}
