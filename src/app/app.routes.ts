import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './components/usuarios/lista-usuarios/lista-usuarios.component';

export const routes: Routes = [
  {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
  {path: 'usuarios', component: ListaUsuariosComponent}

];
