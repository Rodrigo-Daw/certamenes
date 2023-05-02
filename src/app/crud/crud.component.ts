import { Component, Input } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  @Input() id:any

  constructor(private crudService: CrudService) { }

  getIdentificacion(){
    return this.crudService.getBanda(this.id)
  }
}
