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

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    ListaDeBandasComponent,
    ProximosCertamenesComponent,
    EntrarComponent,
    RegistroComponent,
    LoginComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [ProximosCertamenesService, ListaDeBandasService, RegistroService,  LoginService, CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
