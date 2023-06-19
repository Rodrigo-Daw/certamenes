import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota } from 'src/app/models/nota.model';

@Injectable({
  providedIn: 'root'
})
export class CertamenesCelebradosService {

  nombre_certamen:any
  fecha:any
  lugar:any

  nombre_banda:any
  notas:any

  ruta_local = "http://localhost/certamenes/certamenes.php"
  ruta = "api/certamenes.php"

  constructor(private http: HttpClient) {
    this.http.get(this.ruta+"?opcion=certamenesCelebrados").subscribe((datos) => {
      this.nombre_certamen = datos
      this.fecha = datos
      this.lugar = datos
    })
  }

  getNombre(){
    return this.nombre_certamen
   }

   getNota(id: string){
    this.notas = this.http.get<Nota>(this.ruta+'?opcion=puntuacion&id='+id)
    return this.notas
  }

  puntuarBanda(id: string, nota: number){
    return this.http.put(this.ruta+'?opcion=listarPorCertamen&id='+id, JSON.stringify(nota))
  }
}
