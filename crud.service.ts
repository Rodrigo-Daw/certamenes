import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banda } from 'src/app/models/banda.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  banda:any
  bandas:any

  id:any
  nombre_banda:any
  nombre_director:any
  numero_musicos:any
  localidad:any
  pais:any
  codigo_postal:any
  telefono:any
  correo_electronico:any
  clave:any

  ruta = "http://localhost/certamenes/certamenes.php"

  constructor(private http: HttpClient) {
    this.http.get(this.ruta+'?opcion=soloBandas').subscribe((datos) => {
      this.id = datos
      this.nombre_banda = datos
      this.nombre_director = datos
      this.numero_musicos = datos
      this.localidad = datos
      this.pais = datos
      this.codigo_postal = datos
      this.telefono = datos
      this.correo_electronico = datos
      this.clave = datos
    })
  }

  getBandas(){
    this.bandas = this.http.get(this.ruta+'?opcion=soloBandas').subscribe((datos) => {
      this.id = datos
      this.nombre_banda = datos
      this.nombre_director = datos
      this.numero_musicos = datos
      this.localidad = datos
      this.pais = datos
      this.codigo_postal = datos
      this.telefono = datos
      this.correo_electronico = datos
      this.clave = datos
    })

    return this.bandas
  }
  
  getBanda(id: string){
    this.banda = this.http.get<Banda>(this.ruta+'?opcion=crud&id='+id)
    return this.banda
  }

  getBandaActual(){
    return this.banda
  }

   editarBanda(id: string, banda: Banda){
    return this.http.put<Banda>(this.ruta+'?opcion=editar&id='+id, JSON.stringify(banda))
  }

   borrarBanda(id: number){
    return this.http.delete(this.ruta+'?opcion=eliminar&id='+id)
   }
}
