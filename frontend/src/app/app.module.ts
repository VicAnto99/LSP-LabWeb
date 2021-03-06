import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { PagosPrivadosComponent } from './components/pagos-privados/pagos-privados.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ChidoPagosComponent } from './components/chido-pagos/chido-pagos.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    RegistroComponent,
    IngresarComponent,
    PagosComponent,
    PagosPrivadosComponent,
    PerfilComponent,
    ProveedorComponent,
    ClienteComponent,
    ProcesosComponent,
    DashboardComponent,
    ChidoPagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule, 
    MatTableModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
