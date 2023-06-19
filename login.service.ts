import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ruta_local = "http://localhost/certamenes/certamenes.php?opcion=acceso"
  ruta = "api/certamenes.php?opcion=acceso"

  constructor(private http: HttpClient) { }

  enviarBanda(banda: Login){
    return this.http.post(this.ruta, JSON.stringify(banda))
  }

}
