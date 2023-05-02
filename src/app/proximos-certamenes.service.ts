import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProximosCertamenesService {

  nombre_certamen:any
  fecha:any
  lugar:any

  ruta = "http://localhost/certamenes/certamenes.php?opcion=proximosCertamenes"

  constructor(private http: HttpClient) {
    this.http.get(this.ruta).subscribe((datos) => {
      this.nombre_certamen = datos
      this.fecha = datos
      this.lugar = datos
    })

   }
   

   getNombre(){
    return this.nombre_certamen
   }

}
