import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banda } from 'src/app/models/banda.model';

@Injectable({
  providedIn: 'root'
})
export class ListaDeBandasService {

  bandas:any

  ruta_local = "http://localhost/certamenes/certamenes.php"
  ruta = "api/certamenes.php"

  constructor(private http: HttpClient) {}

   getNombre(id: string){
    this.bandas = this.http.get<Banda>(this.ruta+'?opcion=bandas&id='+id)
    return this.bandas
  }
}
