import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProximosCertamenesComponent } from './proximos-certamenes/proximos-certamenes.component';
import { ListaDeBandasComponent } from './lista-de-bandas/lista-de-bandas.component';
import { EntrarComponent } from './entrar/entrar.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { EditarBandaComponent } from './editar-banda/editar-banda.component';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { TodasLasBandasComponent } from './todas-las-bandas/todas-las-bandas.component';
import { InscribirseACertamenComponent } from './inscribirse-acertamen/inscribirse-acertamen.component';
import { JuecesComponent } from './jueces/jueces.component';
import { JuezLogueadoComponent } from './juez-logueado/juez-logueado.component';
import { NuevoCertamenComponent } from './nuevo-certamen/nuevo-certamen.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { PuntuacionComponent } from './puntuacion/puntuacion.component';
import { PuntuarBandaComponent } from './puntuar-banda/puntuar-banda.component';
import { ListarPorCertamenComponent } from './listar-por-certamen/listar-por-certamen.component';

const routes: Routes = [
  { path:"proximosCertamenes", component: ProximosCertamenesComponent},
  { path:"listaDeBandas", component: ListaDeBandasComponent},
  { path:"entrar", component: EntrarComponent},
  { path:"registrar", component: RegistroComponent},
  { path:"login", component: LoginComponent},
  { path:"crud/:id", component: CrudComponent},
  { path:"editar/:id", component: EditarBandaComponent},
  { path:"eliminar/:id", component: DialogoConfirmacionComponent},
  { path:"todasLasBandas", component: TodasLasBandasComponent},
  { path:"inscribirse/:id", component: InscribirseACertamenComponent},
  { path:"jueces", component: JuecesComponent},
  { path:"juezLogueado", component: JuezLogueadoComponent},
  { path:"nuevoCertamen", component: NuevoCertamenComponent},
  { path:"clasificacion", component: ClasificacionComponent},
  { path:"puntuacion/:id", component: PuntuacionComponent},
  { path:"puntuarBanda", component: PuntuarBandaComponent},
  { path:"listarPorCertamen/:id", component: ListarPorCertamenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
