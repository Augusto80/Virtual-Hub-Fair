import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InicioComponent} from './componentes/inicio/inicio.component'; 
import {LoginComponent} from './componentes/login/login.component';
import {FormRegistroComponent} from './componentes/form-registro/form-registro.component'; 
import {FooterComponent} from './componentes/footer/footer.component';
import {PerfilRegistroComponent} from './componentes/perfil-registro/perfil-registro.component';
import {PerfilRegistroVendedorComponent} from './componentes/perfil-registro-vendedor/perfil-registro-vendedor.component';
import {PerfilRegistroCompradorComponent} from './componentes/perfil-registro-comprador/perfil-registro-comprador.component';
import {PerfilRegistroVisitanteComponent} from './componentes/perfil-registro-visitante/perfil-registro-visitante.component';
import {OlvidoClaveComponent} from './componentes/olvido-clave/olvido-clave.component';
import {DashboardCompradorComponent} from './componentes/dashboard-comprador/dashboard-comprador.component';
import {DashboardVendedorComponent} from './componentes/dashboard-vendedor/dashboard-vendedor.component';
import {EditarPerfilComponent} from './componentes/editar-perfil/editar-perfil.component';
import {ListaVendedoresComponent} from './componentes/lista-vendedores/lista-vendedores.component';
import {CitasProgramadasComponent} from './componentes/citas-programadas/citas-programadas.component';
import {EditarPerfilVendedorComponent} from './componentes/editar-perfil-vendedor/editar-perfil-vendedor.component';
import {EstadisticasVendedorComponent} from './componentes/estadisticas-vendedor/estadisticas-vendedor.component';
import {ProgramarCitaVendedorComponent} from './componentes/programar-cita-vendedor/programar-cita-vendedor.component';

const routes: Routes = [

  {path:'inicio', component:InicioComponent},
  {path: 'form-registro',component:FormRegistroComponent},
  {path: 'login',component:LoginComponent},
  {path: 'footer',component:FooterComponent},
  {path:  'perfil-registro',component:PerfilRegistroComponent},
  {path: 'perfil-registro-vendedor',component:PerfilRegistroVendedorComponent},
  {path: 'perfil-registro-comprador', component: PerfilRegistroCompradorComponent},
  {path: 'perfil-registro-visitante', component: PerfilRegistroVisitanteComponent},
  {path: 'olvido-clave', component: OlvidoClaveComponent},
  {path: 'dashboard-comprador',component: DashboardCompradorComponent},
  {path: 'dashboard-vendedor',component: DashboardVendedorComponent},
  {path: 'editar-perfil',component: EditarPerfilComponent},
  {path: 'lista-vendedores',component: ListaVendedoresComponent},
  {path: 'citas-programadas',component: CitasProgramadasComponent},
  {path: 'editar-perfil-vendedor',component: EditarPerfilVendedorComponent},
  {path: 'estadisticas-vendedor',component: EstadisticasVendedorComponent},
  {path: 'programar-cita-vendedor',component: ProgramarCitaVendedorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
