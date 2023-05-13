import { Injectable } from '@angular/core';
import { Juez } from './juez';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JuezLogueadoService {

  ruta = "http://localhost/certamenes/certamenes.php?opcion=juez"

  
  constructor(private http: HttpClient) { }

  enviarJuez(juez: Juez){
    return this.http.post(this.ruta, JSON.stringify(juez))
  }
}
