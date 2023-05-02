import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaDeBandasService {

  nombre_banda:any
  nombre_director:any
  numero_musicos:any
  localidad:any
  provincia:any
  codigo_postal:any
  telefono:any
  correo_electronico:any
  clave:any
  nombre_certamen:any

  ruta = "http://localhost/certamenes/certamenes.php?opcion=bandas"

  constructor(private http: HttpClient) {
    this.http.get(this.ruta).subscribe((datos) => {
      this.nombre_banda = datos
      this.nombre_director = datos
      this.numero_musicos = datos
      this.localidad = datos
      this.provincia = datos
      this.codigo_postal = datos
      this.telefono = datos
      this.correo_electronico = datos
      this.clave = datos
      this.nombre_certamen = datos
    })
   }

   getNombre() {
    return this.nombre_banda
   }
}
