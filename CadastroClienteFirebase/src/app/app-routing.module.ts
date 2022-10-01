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
import { EsqueciSenhaComponent } from './components/login/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { ProdutoCreateComponent } from './components/produtos/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './components/produtos/produto-delete/produto-delete.component';
import { ProdutoReadComponent } from './components/produtos/produto-read/produto-read.component';
import { ProdutoUpdateComponent } from './components/produtos/produto-update/produto-update.component';
import { ServicoCreateComponent } from './components/servicos/servico-create/servico-create.component';
import { ServicoDeleteComponent } from './components/servicos/servico-delete/servico-delete.component';
import { ServicoReadComponent } from './components/servicos/servico-read/servico-read.component';
import { ServicoUpdateComponent } from './components/servicos/servico-update/servico-update.component';
import { UsuarioCreateComponent } from './Components/Usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './Components/Usuario/usuario-delete/usuario-delete.component';
import { UsuarioReadComponent } from './Components/Usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './Components/Usuario/usuario-update/usuario-update.component';
import { GuardService } from './Services/Usuario/auth/guard.service';
import { UserServiceService } from './Services/Usuario/user-service.service';
import { NavComponent } from './Template/nav/nav.component';
import { MenuComponent } from './View/menu/menu.component';


const routes: Routes = [
  {path: "", component: NavComponent, pathMatch: "full", redirectTo: ''},

  //Menu
  {path: "menu", component: MenuComponent, canActivate: [GuardService]},
    
  //Colaboradores
  {path: "colaboradores", component: ColaboradorReadComponent, canActivate: [GuardService]},
  {path: "colaboradores/add", component:ColaboradorCreateComponent},
  {path: "colaboradores/delete/:id", component:ColaboradorDeleteComponent, canActivate: [GuardService]},
  {path: "colaboradores/update/:id", component:ColaboradorUpdateComponent, canActivate: [GuardService]},

  //Usuarios
  {path: "usuarios", component: UsuarioReadComponent, canActivate: [GuardService]},
  {path: "usuarios/add", component:UsuarioCreateComponent, canActivate: [GuardService]},
  {path: "usuarios/delete/:id", component:UsuarioDeleteComponent, canActivate: [GuardService]},
  {path: "usuarios/update/:id", component:UsuarioUpdateComponent},

  //Clientes  
  {path: "clientes/:id_col/cliente", component: ClienteCreateAllComponent, canActivate: [GuardService]},
  {path: "clientes", component: ClienteReadComponent, canActivate: [GuardService]},
  {path: "clientes/:id_col/cliente/create", component:ClienteCreateComponent, canActivate: [GuardService]},
  {path: "clientes/:id_col/cliente/:id/delete", component:ClienteDeleteComponent, canActivate: [GuardService]},
  {path: "clientes/:id_col/cliente/:id/update", component:ClienteUpdateComponent, canActivate: [GuardService]},

  //Serviços
  {path: "servicos", component: ServicoReadComponent, canActivate: [GuardService]},
  {path: "servicos/add", component:ServicoCreateComponent},
  {path: "servicos/delete/:id", component:ServicoDeleteComponent, canActivate: [GuardService]},
  {path: "servicos/update/:id", component:ServicoUpdateComponent, canActivate: [GuardService]},

  //Produtos
  {path: "produtos", component: ProdutoReadComponent, canActivate: [GuardService]},
  {path: "produtos/add", component:ProdutoCreateComponent},
  {path: "produtos/delete/:id", component:ProdutoDeleteComponent, canActivate: [GuardService]},
  {path: "produtos/update/:id", component:ProdutoUpdateComponent, canActivate: [GuardService]},
  
  //login
  {path: "login", component: LoginComponent},
  {path: "esqueci-senha", component: EsqueciSenhaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
