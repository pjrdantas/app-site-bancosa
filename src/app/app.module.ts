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

import {routing} from './../app.routes';


import {ConfigService} from './services/config.service';
import {NotaService} from './services/nota.service';
import {BancoService} from './services/banco.service';
import {AgenciaService} from './services/agencia.service';


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
    CadastroAgenciaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    AppBootstrapModule,
    routing
  ],
  providers: [ConfigService, NotaService, BancoService, AgenciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

