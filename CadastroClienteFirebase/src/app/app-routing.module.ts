import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteCreateAllComponent } from './Components/CLiente/cliente-create-all/cliente-create-all.component';
import { ClienteCreateComponent } from './Components/CLiente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './Components/CLiente/cliente-delete/cliente-delete.component';
import { ClienteReadComponent } from './Components/CLiente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './Components/CLiente/cliente-update/cliente-update.component';
import { ColaboradorCreateComponent } from './Components/Colaborador/colaborador-create/colaborador-create.component';
import { ColaboradorDeleteComponent } from './Components/Colaborador/colaborador-delete/colaborador-delete.component';
import { ColaboradorReadComponent } from './Components/Colaborador/colaborador-read/colaborador-read.component';
import { ColaboradorUpdateComponent } from './Components/Colaborador/colaborador-update/colaborador-update.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { UsuarioCreateComponent } from './Components/Usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './Components/Usuario/usuario-delete/usuario-delete.component';
import { UsuarioReadComponent } from './Components/Usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './Components/Usuario/usuario-update/usuario-update.component';
import { MenuComponent } from './View/menu/menu.component';


const routes: Routes = [
  {path: "", component: MenuComponent},
  
  //Colaboradores
  {path: "colaboradores", component: ColaboradorReadComponent},
  {path: "colaboradores/add", component:ColaboradorCreateComponent},
  {path: "colaboradores/delete/:id", component:ColaboradorDeleteComponent},
  {path: "colaboradores/update/:id", component:ColaboradorUpdateComponent},

  //Usuarios
  {path: "usuarios", component: UsuarioReadComponent},
  {path: "usuarios/add", component:UsuarioCreateComponent},
  {path: "usuarios/delete/:id", component:UsuarioDeleteComponent},
  {path: "usuarios/update/:id", component:UsuarioUpdateComponent},

  //Clientes  
  {path: "clientes/:id_col/cliente", component: ClienteCreateAllComponent},
  {path: "clientes", component: ClienteReadComponent},
  {path: "clientes/:id_col/cliente/create", component:ClienteCreateComponent},
  {path: "clientes/:id_col/cliente/:id/delete", component:ClienteDeleteComponent},
  {path: "clientes/:id_col/cliente/:id/update", component:ClienteUpdateComponent},

  //login
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
