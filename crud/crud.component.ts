import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute } from '@angular/router';
import { Banda } from 'src/app/models/banda.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component";
import { EliminarBanda } from 'src/app/models/eliminarBanda.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router"


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

 id:any;
 banda: Banda = {} as Banda; 
 bandaEliminada: EliminarBanda = {} as EliminarBanda

  constructor(private crudService: CrudService, private route: ActivatedRoute, public dialogo: MatDialog, private snackBar: MatSnackBar, private router: Router) { 
    this.route.params.subscribe(data => {
      this.id = data['id'];
    })

    if (this.id){
      this.crudService.getBanda(this.id).subscribe( (res: Banda) => {
        this.banda = res;
      })
    }
  }


  eliminarBanda(banda: Banda) {
    this.route.params.subscribe(data => {
      this.id = data['id'] 
    }) 
      this.dialogo
        .open(DialogoConfirmacionComponent, {
          data: `¿Realmente quieres eliminar a ${banda.nombre_banda}?`
        })
        .afterClosed()
        .subscribe((confirmado: Boolean) => {
          if (!confirmado) return;
          this.crudService
            .borrarBanda(this.id)
            .subscribe(() => {
              this.snackBar.open('Banda eliminada', undefined, {
                duration: 1500,
              });
            });
            this.router.navigate(['/login'])
        })
      
  }
}
