import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';

import { MenuAdmComponent } from './adm/menuAdm/menuAdm.component';
import { HomeComponent } from './home/home.component';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { ConsultaNotaComponent } from './adm/nota/consulta/consulta.component';
import { CadastroNotaComponent } from './adm/nota/cadastro/cadastro.component';

import { ConsultaBancoComponent } from './adm/banco/consulta/consulta.component';
import { CadastroBancoComponent } from './adm/banco/cadastro/cadastro.component';

import { ConsultaAgenciaComponent } from './adm/agencia/consulta/consulta.component';
import { CadastroAgenciaComponent } from './adm/agencia/cadastro/cadastro.component';

import { ConsultaClienteComponent } from './adm/cliente/consulta/consulta.component';
import { CadastroClienteComponent } from './adm/cliente/cadastro/cadastro.component';

import { ConsultaContaComponent } from './adm/conta/consulta/consulta.component';
import { CadastroContaComponent } from './adm/conta/cadastro/cadastro.component';

import { ConsultaMovimentacaoComponent } from './adm/movimentacao/consulta/consulta.component';
import { IncluirCMovimentacaoComponent } from './adm/movimentacao/incluirCredito/incluirc.component';
import { IncluirDMovimentacaoComponent } from './adm/movimentacao/incluirDebito/incluird.component';

import {routing} from './../app.routes';


import {ConfigService} from './services/config.service';
import {NotaService} from './services/nota.service';
import {BancoService} from './services/banco.service';
import {AgenciaService} from './services/agencia.service';
import {ClienteService} from './services/cliente.service';
import {ContaService} from './services/conta.service';
import {MovimentacaoService} from './services/movimentacao.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuAdmComponent,
    HomeComponent,
    ConsultaNotaComponent,
    CadastroNotaComponent,
    ConsultaBancoComponent,
    CadastroBancoComponent,
    ConsultaAgenciaComponent,
    CadastroAgenciaComponent,
    ConsultaClienteComponent,
    CadastroClienteComponent,
    ConsultaContaComponent,
    CadastroContaComponent,
    ConsultaMovimentacaoComponent,
    IncluirCMovimentacaoComponent,
    IncluirDMovimentacaoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    AppBootstrapModule,
    routing
  ],
  providers: [ConfigService, NotaService, BancoService, AgenciaService, ClienteService, ContaService, MovimentacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

