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
  id_banda:any
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

  calificar(){
    this.route.params.subscribe(data => {
      this.id_banda = data['banda_id']
    }) 
    console.log(this.id_banda)
    if (this.id_banda){
      this.nota = this.certamenService.puntuarBanda(this.id_banda, this.bandas.nota).subscribe((res: any) => {
        this.bandas.nota = res
      })
    }
    return this.nota
  }

  rellenar(){
    if(!this.bandas.nota){
      this.notaOK = false
      this.snackBar.open("Falta la nota de la banda", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }else if(this.bandas.nota>10|| this.bandas.nota<0){
      this.notaOK = false
      this.snackBar.open("La nota debe estar entre 0 y 10", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }else{
      this.calificar()
      this.snackBar.open("Banda puntuada correctamente", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      this.router.navigate(['/puntuarBanda'])
    }
  }

  notaCorregida(){
    this.notaOK = true
  }
}
