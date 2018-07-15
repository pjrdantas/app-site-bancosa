import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { ConsultaNotaComponent } from './nota/consulta/consulta.component';
import { CadastroNotaComponent } from './nota/cadastro/cadastro.component';

import { ConsultaBancoComponent } from './banco/consulta/consulta.component';
import { CadastroBancoComponent } from './banco/cadastro/cadastro.component';

import { ConsultaAgenciaComponent } from './agencia/consulta/consulta.component';
import { CadastroAgenciaComponent } from './agencia/cadastro/cadastro.component';

import { ConsultaClienteComponent } from './cliente/consulta/consulta.component';
import { CadastroClienteComponent } from './cliente/cadastro/cadastro.component';

import { ConsultaContaComponent } from './conta/consulta/consulta.component';
import { CadastroContaComponent } from './conta/cadastro/cadastro.component';

import { ConsultaMovimentacaoComponent } from './movimentacao/consulta/consulta.component';
import { CadastroMovimentacaoComponent } from './movimentacao/cadastro/cadastro.component';

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
    MenuComponent,
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
    CadastroMovimentacaoComponent
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

