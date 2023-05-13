import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ListaDeBandasComponent } from './lista-de-bandas/lista-de-bandas.component';
import { ProximosCertamenesComponent } from './proximos-certamenes/proximos-certamenes.component';
import { ProximosCertamenesService } from './proximos-certamenes.service';
import { ListaDeBandasService } from './lista-de-bandas.service';
import { EntrarComponent } from './entrar/entrar.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroService } from './registro.service';
import { LoginService } from './login.service';
import { CrudService } from './crud.service';
import { TodasLasBandasService } from './todas-las-bandas.service';
import { JuezLogueadoService } from './juez-logueado.service';
import { NuevoCertamenService } from './nuevo-certamen.service';
import { CertamenesCelebradosService } from './certamenes-celebrados.service';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { EditarBandaComponent } from './editar-banda/editar-banda.component';
import { TodasLasBandasComponent } from './todas-las-bandas/todas-las-bandas.component';
import { InscribirseACertamenComponent } from './inscribirse-acertamen/inscribirse-acertamen.component';
import { JuecesComponent } from './jueces/jueces.component';
import { JuezLogueadoComponent } from './juez-logueado/juez-logueado.component';
import { NuevoCertamenComponent } from './nuevo-certamen/nuevo-certamen.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { PuntuacionComponent } from './puntuacion/puntuacion.component';
import { PuntuarBandaComponent } from './puntuar-banda/puntuar-banda.component';
import { ListarPorCertamenComponent } from './listar-por-certamen/listar-por-certamen.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    ListaDeBandasComponent,
    ProximosCertamenesComponent,
    EntrarComponent,
    RegistroComponent,
    LoginComponent,
    CrudComponent,
    EditarBandaComponent,
    DialogoConfirmacionComponent,
    TodasLasBandasComponent,
    InscribirseACertamenComponent,
    JuecesComponent,
    JuezLogueadoComponent,
    NuevoCertamenComponent,
    ClasificacionComponent,
    PuntuacionComponent,
    PuntuarBandaComponent,
    ListarPorCertamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [ProximosCertamenesService, ListaDeBandasService, RegistroService,  LoginService, CrudService, 
              TodasLasBandasService, JuezLogueadoService, NuevoCertamenService, CertamenesCelebradosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
