import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRegistroComponent } from './componentes/form-registro/form-registro.component';
import { CarrouselComponent } from './componentes/carrousel/carrousel.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilRegistroComponent } from './componentes/perfil-registro/perfil-registro.component';
import { PerfilRegistroVendedorComponent } from './componentes/perfil-registro-vendedor/perfil-registro-vendedor.component';
import { PerfilRegistroCompradorComponent } from './componentes/perfil-registro-comprador/perfil-registro-comprador.component';
import { PerfilRegistroVisitanteComponent } from './componentes/perfil-registro-visitante/perfil-registro-visitante.component';

import {HttpClientModule} from '@angular/common/http';
import {ClientesService} from './services/clientes.service';
import { DashboardCompradorComponent } from './componentes/dashboard-comprador/dashboard-comprador.component';
import { OlvidoClaveComponent } from './componentes/olvido-clave/olvido-clave.component';
import { DashboardVendedorComponent } from './componentes/dashboard-vendedor/dashboard-vendedor.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { ListaVendedoresComponent } from './componentes/lista-vendedores/lista-vendedores.component';
import { CitasProgramadasComponent } from './componentes/citas-programadas/citas-programadas.component';
import { EditarPerfilVendedorComponent } from './componentes/editar-perfil-vendedor/editar-perfil-vendedor.component';
import { EstadisticasVendedorComponent } from './componentes/estadisticas-vendedor/estadisticas-vendedor.component';
import { ProgramarCitaVendedorComponent } from './componentes/programar-cita-vendedor/programar-cita-vendedor.component';
import { DashboardAdministracionComponent } from './componentes/dashboard-administracion/dashboard-administracion.component';
@NgModule({
  declarations: [
    AppComponent,
    FormRegistroComponent,
    CarrouselComponent,
    FooterComponent,
    InicioComponent,
    NavbarComponent,
    LoginComponent,
    PerfilRegistroComponent,
    PerfilRegistroVendedorComponent,
    PerfilRegistroCompradorComponent,
    PerfilRegistroVisitanteComponent,
    DashboardCompradorComponent,
    OlvidoClaveComponent,
    DashboardVendedorComponent,
    EditarPerfilComponent,
    ListaVendedoresComponent,
    CitasProgramadasComponent,
    EditarPerfilVendedorComponent,
    EstadisticasVendedorComponent,
    ProgramarCitaVendedorComponent,
    DashboardAdministracionComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
