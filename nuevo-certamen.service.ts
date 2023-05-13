import { Injectable } from '@angular/core';
import { NuevoCertamen } from './nuevo-certamen';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NuevoCertamenService {

  ruta = "http://localhost/certamenes/certamenes.php?opcion=nuevoCertamen"

  constructor(private http: HttpClient) { }

  insertarCertamen(certamen: NuevoCertamen){
    return this.http.post(this.ruta, JSON.stringify(certamen))
  }
}
