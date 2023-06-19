import { Injectable } from '@angular/core';
import { Registro } from './registro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  ruta_local = "http://localhost/certamenes/certamenes.php?opcion=registrar"
  ruta = "api/certamenes.php?opcion=registrar"

  constructor(private http: HttpClient) {}

  insertarBanda(banda: Registro){
    return this.http.post(this.ruta, JSON.stringify(banda))
  }
}
