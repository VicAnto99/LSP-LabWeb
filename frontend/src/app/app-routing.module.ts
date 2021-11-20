import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagosComponent } from './components/pagos/pagos.component';
import { PagosPrivadosComponent } from './components/pagos-privados/pagos-privados.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ChidoPagosComponent } from './components/chido-pagos/chido-pagos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/info',
    pathMatch: 'full'
  },
  {
    path: 'info',
    component: PagosPrivadosComponent
  },
  {
    path: 'ingresar',
    component: IngresarComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pagos',
    component: ChidoPagosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'proceso',
    component: ProcesosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'proveedor',
    component: ProveedorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'trabajo',
    component: PagosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'material',
    component: PeliculasComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
