import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodasLasBandasService {

  nombre_banda:any
  nombre_director:any
  localidad:any
  pais:any

  ruta = "http://localhost/certamenes/certamenes.php?opcion=soloBandas"

  constructor(private http: HttpClient) { 
    this.http.get(this.ruta).subscribe((datos) => {
      this.nombre_banda = datos
      this.nombre_director = datos
      this.localidad = datos
      this.pais = datos
    })
  }

  getNombre() {
    return this.nombre_banda
   }
}
