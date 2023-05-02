import { Component } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  banda = new Login("","")

  id:any

  correoOK = true
  claveOK = true

  acceso = false

  constructor(private loginService: LoginService, private snackBar: MatSnackBar, private router: Router){}
  
  enviarBanda(){
    return this.loginService.enviarBanda(this.banda).subscribe((datos:any) => {
      if(datos) {
        this.acceso = true
        this.id = datos
        this.id = String(this.id)
        this.router.navigate(['/crud', this.id])
      }else{
        this.acceso = false
        this.snackBar.open("Las credenciales no son correctas", "", {
          duration: 1500,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
      }
      console.log(this.acceso)
    })
  }

  rellenar(){
    if(!this.banda.correo_electronico){
      this.correoOK = false
      this.snackBar.open("Debe introducir su correo electrónico", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.banda.clave){
      this.claveOK = false
      this.snackBar.open("Debe introducir su contraseña", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else{
      this.enviarBanda()
    }
  }

  correoCorregido(){
    this.correoOK = true
  }

  claveCorregida(){
    this.claveOK = true
  }
}
