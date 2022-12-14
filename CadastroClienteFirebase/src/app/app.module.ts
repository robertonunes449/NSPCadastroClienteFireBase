import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { ColaboradorReadComponent } from './Components/Colaborador/colaborador-read/colaborador-read.component';
import { ColaboradorCreateComponent } from './Components/Colaborador/colaborador-create/colaborador-create.component';
import { ColaboradorUpdateComponent } from './Components/Colaborador/colaborador-update/colaborador-update.component';
import { ColaboradorDeleteComponent } from './Components/Colaborador/colaborador-delete/colaborador-delete.component';
import { HeaderComponent } from './Template/header/header.component';
import { NavComponent } from './Template/nav/nav.component';
import { FooterComponent } from './Template/footer/footer.component';
import { MenuComponent } from './View/menu/menu.component';
import { ClienteReadComponent } from './Components/CLiente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './Components/CLiente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './Components/CLiente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './Components/CLiente/cliente-delete/cliente-delete.component';
import { UsuarioReadComponent } from './Components/Usuario/usuario-read/usuario-read.component';
import { UsuarioCreateComponent } from './Components/Usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './Components/Usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './Components/Usuario/usuario-delete/usuario-delete.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { ClienteCreateAllComponent } from './Components/CLiente/cliente-create-all/cliente-create-all.component';
import { NgxMaskModule } from 'ngx-mask';
/* Importando a configura????o de algumas linguagens */
import { registerLocaleData } from '@angular/common';
import localept from '@angular/common/locales/pt';
import localeES from '@angular/common/locales/es';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';
import { EsqueciSenhaComponent } from './components/login/esqueci-senha/esqueci-senha.component';
import { ConfirmarEmailComponent } from './components/login/confirmar-email/confirmar-email.component';
import { ServicoReadComponent } from './components/servicos/servico-read/servico-read.component';
import { ServicoCreateComponent } from './components/servicos/servico-create/servico-create.component';
import { ServicoUpdateComponent } from './components/servicos/servico-update/servico-update.component';
import { ServicoDeleteComponent } from './components/servicos/servico-delete/servico-delete.component';
import { ProdutoDeleteComponent } from './components/produtos/produto-delete/produto-delete.component';
import { ProdutoCreateComponent } from './components/produtos/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './components/produtos/produto-update/produto-update.component';
import { ProdutoReadComponent } from './components/produtos/produto-read/produto-read.component';
registerLocaleData(localept);
registerLocaleData(localeES);
registerLocaleData(localeDE);
registerLocaleData(localeFR);
/* *********************************************** */

@NgModule({
  declarations: [
    AppComponent,
    ColaboradorReadComponent,
    ColaboradorCreateComponent,
    ColaboradorUpdateComponent,
    ColaboradorDeleteComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    MenuComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    UsuarioReadComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    UsuarioDeleteComponent,
    LoginComponent,
    ClienteCreateAllComponent,
    EsqueciSenhaComponent,
    ConfirmarEmailComponent,
    ServicoReadComponent,
    ServicoCreateComponent,
    ServicoUpdateComponent,
    ServicoDeleteComponent,
    ProdutoDeleteComponent,
    ProdutoCreateComponent,
    ProdutoUpdateComponent,
    ProdutoReadComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxMaskModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
