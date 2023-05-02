import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProximosCertamenesComponent } from './proximos-certamenes/proximos-certamenes.component';
import { ListaDeBandasComponent } from './lista-de-bandas/lista-de-bandas.component';
import { EntrarComponent } from './entrar/entrar.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  { path:"proximosCertamenes", component: ProximosCertamenesComponent},
  { path:"listaDeBandas", component: ListaDeBandasComponent},
  { path:"entrar", component: EntrarComponent},
  { path:"registrar", component: RegistroComponent},
  { path:"login", component: LoginComponent},
  { path:"crud/:id", component: CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
