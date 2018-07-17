import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ConsultaNotaComponent } from './app/adm/nota/consulta/consulta.component';
import { CadastroNotaComponent } from './app/adm/nota/cadastro/cadastro.component';

import { ConsultaBancoComponent } from './app/adm/banco/consulta/consulta.component';
import { CadastroBancoComponent } from './app/adm/banco/cadastro/cadastro.component';

import { ConsultaAgenciaComponent } from './app/adm/agencia/consulta/consulta.component';
import { CadastroAgenciaComponent } from './app/adm/agencia/cadastro/cadastro.component';

import { ConsultaClienteComponent } from './app/adm/cliente/consulta/consulta.component';
import { CadastroClienteComponent } from './app/adm/cliente/cadastro/cadastro.component';

import { ConsultaContaComponent } from './app/adm/conta/consulta/consulta.component';
import { CadastroContaComponent } from './app/adm/conta/cadastro/cadastro.component';

import { ConsultaMovimentacaoComponent } from './app/adm/movimentacao/consulta/consulta.component';
import { IncluirCMovimentacaoComponent } from './app/adm/movimentacao/incluirCredito/incluirc.component';
import { IncluirDMovimentacaoComponent } from './app/adm/movimentacao/incluirDebito/incluird.component';


import { HomeComponent } from './app/home/home.component';

const appRoutes: Routes = [
    { path: 'home',                        component: HomeComponent },
    { path: '',                            component: HomeComponent },

    { path: 'consulta-nota',               component: ConsultaNotaComponent },
    { path: 'cadastro-nota',               component: CadastroNotaComponent },
    { path: 'cadastro-nota/:idNotas',      component: CadastroNotaComponent },

    { path: 'consulta-banco',              component: ConsultaBancoComponent },
    { path: 'cadastro-banco',              component: CadastroBancoComponent },
    { path: 'cadastro-banco/:idBanco',     component: CadastroBancoComponent },

    { path: 'consulta-agencia',            component: ConsultaAgenciaComponent },
    { path: 'cadastro-agencia',            component: CadastroAgenciaComponent },
    { path: 'cadastro-agencia/:idAgencia', component: CadastroAgenciaComponent },
    
    { path: 'consulta-cliente',            component: ConsultaClienteComponent },
    { path: 'cadastro-cliente',            component: CadastroClienteComponent },
    { path: 'cadastro-cliente/:idCliente', component: CadastroClienteComponent },
        
    { path: 'consulta-conta',              component: ConsultaContaComponent },
    { path: 'cadastro-conta',              component: CadastroContaComponent },
    { path: 'cadastro-conta/:idConta',     component: CadastroContaComponent },
           
    { path: 'consulta-movimentacao',       component: ConsultaMovimentacaoComponent },
    { path: 'incluirc-movimentacao',       component: IncluirCMovimentacaoComponent },
    { path: 'incluird-movimentacao',       component: IncluirDMovimentacaoComponent }
   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
