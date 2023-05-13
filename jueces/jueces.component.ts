import { Component } from '@angular/core';
import { Juez } from '../juez';
import { JuezLogueadoService } from '../juez-logueado.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";

@Component({
  selector: 'app-jueces',
  templateUrl: './jueces.component.html',
  styleUrls: ['./jueces.component.css']
})
export class JuecesComponent {

  juez = new Juez("","")

  id:any

  correoOK = true
  claveOK = true

  acceso = false

  constructor(private juezLogueadoService: JuezLogueadoService, private snackBar: MatSnackBar, private router: Router){}
  
  enviarJuez(){
    return this.juezLogueadoService.enviarJuez(this.juez).subscribe((datos:any) => {
      if(datos) {
        this.acceso = true
        this.router.navigate(['/juezLogueado'])
      }else{
        this.acceso = false
        this.snackBar.open("Las credenciales no son correctas", "", {
          duration: 1500,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
      }
    })
  }

  rellenar(){
    if(!this.juez.correo_electronico){
      this.correoOK = false
      this.snackBar.open("Debe introducir su correo electrónico", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.juez.clave){
      this.claveOK = false
      this.snackBar.open("Debe introducir su contraseña", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else{
      this.enviarJuez()
    }
  }

  correoCorregido(){
    this.correoOK = true
  }

  claveCorregida(){
    this.claveOK = true
  }
}
