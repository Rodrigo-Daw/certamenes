import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  nombre_banda:any
  nombre_director:any
  numero_musicos:any
  localidad:any
  provincia:any
  codigo_postal:any
  telefono:any
  correo_electronico:any

  todo:any

  ruta = "http://localhost/certamenes/certamenes.php"

  constructor(private http: HttpClient) {
    
  }

   getBanda(id: string){
    this.todo = this.http.get(this.ruta+'?opcion=crud&id='+id).subscribe((datos) => {
      this.nombre_banda = datos
      this.nombre_director = datos
      this.numero_musicos = datos
      this.localidad = datos
      this.provincia = datos
      this.codigo_postal = datos
      this.telefono = datos
      this.correo_electronico = datos
    })
    
    return this.todo
   }
}
