import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagosComponent } from './components/pagos/pagos.component';
import { PagosPrivadosComponent } from './components/pagos-privados/pagos-privados.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/ingresar',
    pathMatch: 'full'
  },
  {
    path: 'ingresar',
    component: IngresarComponent
  },
  {
    path: 'trabajo',
    component: PagosPrivadosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pagos',
    component: PagosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registro',
    component: RegistroComponent
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
