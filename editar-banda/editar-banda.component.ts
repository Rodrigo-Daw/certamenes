import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
import { Banda } from 'src/app/models/banda.model';
import { EliminarBanda } from 'src/app/models/eliminarBanda.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"

@Component({
  selector: 'app-editar-banda',
  templateUrl: './editar-banda.component.html',
  styleUrls: ['./editar-banda.component.css']
})
export class EditarBandaComponent {

  banda: Banda = {} as Banda;
  bandaEliminada: EliminarBanda = {} as EliminarBanda
  
  id:any
  todo:any 

  nombre_bandaOK = true
  nombre_directorOK = true
  numero_musicosOK = true
  localidadOK = true
  provinciaOK = true
  codigo_postalOK = true
  telefonoOK = true
  correoOK = true

  musicosRegular = /^[5-9]\d|1[0-4]\d|150$/
  cpRegular = /^[0-9]{5}$/
  telefonoRegular = /^(968[0-9]{6})|(6[0-9]{8})$/
  correoRegular = /^[a-z0-9]+@gmail.com$/

  constructor(private crudService: CrudService, 
              private snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute,
              public dialogo: MatDialog){

                this.banda = this.crudService.getBandaActual()
    
  }

  editar(){
    this.route.params.subscribe(data => {
      this.id = data['id']
      this.id = String(this.id)
    }) 
    if (this.id){
      this.todo = this.crudService.editarBanda(this.id, this.banda).subscribe((res: Banda) => {
        this.banda = res
      });
    }
    return this.todo
  }

  rellenar(){
    if(!this.banda.nombre_banda){
      this.nombre_bandaOK = false
      this.snackBar.open("Falta el nombre de la banda", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.banda.nombre_director){
      this.nombre_directorOK = false
      this.snackBar.open("Falta el nombre del director", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.banda.numero_musicos.match(this.musicosRegular) ){
      this.numero_musicosOK = false
      this.snackBar.open("El número debe estar entre 50 y 150", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.banda.numero_musicos){
      this.numero_musicosOK = false
      this.snackBar.open("Falta cantidad de músicos", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.banda.localidad){
      this.localidadOK = false
      this.snackBar.open("Falta el campo 'Localidad'", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.banda.provincia){
      this.provinciaOK = false
      this.snackBar.open("Falta el campo 'Provincia'", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.banda.codigo_postal){
      this.codigo_postalOK = false
      this.snackBar.open("Falta el campo 'Código Postal'", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.banda.codigo_postal.match(this.cpRegular)){
      this.codigo_postalOK = false
      this.snackBar.open("El campo 'Código Postal' consta de 5 dígitos", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.banda.telefono){
      this.telefonoOK = false
      this.snackBar.open("Falta el campo 'Teléfono'", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.banda.telefono.match(this.telefonoRegular)){
      this.telefonoOK = false
      this.snackBar.open("El campo 'Teléfono' consta de 9 dígitos y empieza por '968' ó '6'", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.banda.correo_electronico){
      this.correoOK = false
      this.snackBar.open("Falta el campo 'Correo electrónico'", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else if(!this.banda.correo_electronico.match(this.correoRegular)){
      this.correoOK = false
      this.snackBar.open("El formato del campo 'Correo electrónico' es 'hola123'@gmail.com", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    }
    else{
      this.editar()
      this.snackBar.open("Datos guardados correctamente", "", {
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      this.router.navigate(['/login'])
    }
  }

  nombreBandaCorregido(){
    this.nombre_bandaOK = true
  }

  nombreDirectorCorregido(){
    this.nombre_directorOK = true
  }

  numeroMusicosCorregido(){
    this.numero_musicosOK = true
  }

  localidadCorregida(){
    this.localidadOK = true
  }

  provinciaCorregida(){
    this.provinciaOK = true
  }

  codigoPostalCorregido(){
    this.codigo_postalOK = true
  }

  telefonoCorregido(){
    this.telefonoOK = true
  }

  correoCorregido(){
    this.correoOK = true
  }

  
}
