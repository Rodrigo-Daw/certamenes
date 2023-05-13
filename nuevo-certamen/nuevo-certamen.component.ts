import { Component } from '@angular/core';
import { NuevoCertamen} from '../nuevo-certamen';
import { NuevoCertamenService } from '../nuevo-certamen.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";


@Component({
  selector: 'app-nuevo-certamen',
  templateUrl: './nuevo-certamen.component.html',
  styleUrls: ['./nuevo-certamen.component.css']
})
export class NuevoCertamenComponent {

  fecha = new Date()
  certamen = new NuevoCertamen("",this.fecha,"")

  nombre_certamenOK = true
  fechaOK = true
  lugarOK = true

  constructor(private certamenService: NuevoCertamenService, private snackBar: MatSnackBar, private router: Router){}

  insertar(){
    return this.certamenService.insertarCertamen(this.certamen).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
      }
    });
  }

  rellenar(){
    if(!this.certamen.nombre_certamen){
      this.nombre_certamenOK = false
      this.snackBar.open("Falta el nombre del certamen", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.certamen.fecha){
      this.fechaOK = false
      this.snackBar.open("Falta el campo 'fecha'", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.certamen.lugar){
      this.lugarOK = false
      this.snackBar.open("Falta el campo 'lugar'", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else{
      this.insertar()
      this.snackBar.open("Certamen registrado", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      this.router.navigate(['/juezLogueado'])
    }
  }

  nombreCertamenCorregido(){
    this.nombre_certamenOK = true
  }

  fechaCorregido(){
    this.fechaOK = true
  }

  lugarCorregido(){
    this.lugarOK = true
  }

}
