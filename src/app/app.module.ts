import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menuHome/menu.component';

import { MenuAdmComponent } from './adm/menuAdm/menuAdm.component';


import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { ConsultaBancoComponent } from './adm/banco/consulta/consulta.component';
import { CadastroBancoComponent } from './adm/banco/cadastro/cadastro.component';

import { ConsultaAgenciaComponent } from './adm/agencia/consulta/consulta.component';
import { CadastroAgenciaComponent } from './adm/agencia/cadastro/cadastro.component';

import { ConsultaClienteComponent } from './adm/cliente/consulta/consulta.component';
import { CadastroClienteComponent } from './adm/cliente/cadastro/cadastro.component';

import { ConsultaContaComponent } from './adm/conta/consulta/consulta.component';
import { CadastroContaComponent } from './adm/conta/cadastro/cadastro.component';


import { MenuClieComponent } from './contaCorrente/menuClie/menuClie.component';
import { LoginClieComponent } from './contaCorrente/loginClie/loginClie.component';
import { ContaCorrenteComponent } from './contaCorrente/contaCorrente/contaCorrente.component';
import { DepositoCcComponent } from './contaCorrente/deposito/depositoCC.component';
import { SaqueCcComponent } from './contaCorrente/saque/saqueCC.component';
import { ExtratoCcComponent } from './contaCorrente/extrato/extratoCC.component';


import {routing} from './../app.routes';


import {ConfigService} from './services/config.service';
import {BancoService} from './services/banco.service';
import {AgenciaService} from './services/agencia.service';
import {ClienteService} from './services/cliente.service';
import {ContaService} from './services/conta.service';
import {MovimentacaoService} from './services/movimentacao.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
       
    MenuClieComponent,
    LoginClieComponent,
    ContaCorrenteComponent,
    DepositoCcComponent,
    SaqueCcComponent,
    ExtratoCcComponent,
    
    MenuAdmComponent,
    ConsultaBancoComponent,
    CadastroBancoComponent,
    ConsultaAgenciaComponent,
    CadastroAgenciaComponent,
    ConsultaClienteComponent,
    CadastroClienteComponent,
    ConsultaContaComponent,
    CadastroContaComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    AppBootstrapModule,
    routing
  ],
  providers: [ConfigService, BancoService, AgenciaService, ClienteService, ContaService, MovimentacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

