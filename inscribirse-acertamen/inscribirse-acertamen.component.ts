import { Component } from '@angular/core';
import { ProximosCertamenesService } from '../proximos-certamenes.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router"

@Component({
  selector: 'app-inscribirse-acertamen',
  templateUrl: './inscribirse-acertamen.component.html',
  styleUrls: ['./inscribirse-acertamen.component.css']
})
export class InscribirseACertamenComponent {

  id:any
  certamen:any

  constructor(private certamenesServicio: ProximosCertamenesService, private route: ActivatedRoute, 
              private snackBar: MatSnackBar, private router: Router){}

  getCertamenes(){
    return this.certamenesServicio.getNombre()
  }

  inscribirse(certamen_id:any){
    this.route.params.subscribe(data => {
      this.id = data['id'];
    })
    if(this.certamen == 0 || !this.certamen){
      this.snackBar.open("Debe elegir un certamen", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if (this.id){
      this.certamenesServicio.inscribirse(this.id, certamen_id).subscribe((datos:any) => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.snackBar.open("Inscripción realizada correctamente", "", {
            duration: 1500,
            horizontalPosition: "center",
            verticalPosition: "top",
          });
          this.router.navigate(['/crud', this.id])
        }
      })
    }
  }
}
