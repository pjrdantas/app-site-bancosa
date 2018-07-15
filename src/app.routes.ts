import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ConsultaNotaComponent } from './app/nota/consulta/consulta.component';
import { CadastroNotaComponent } from './app/nota/cadastro/cadastro.component';

import { ConsultaBancoComponent } from './app/banco/consulta/consulta.component';
import { CadastroBancoComponent } from './app/banco/cadastro/cadastro.component';

import { ConsultaAgenciaComponent } from './app/agencia/consulta/consulta.component';
import { CadastroAgenciaComponent } from './app/agencia/cadastro/cadastro.component';

import { ConsultaClienteComponent } from './app/cliente/consulta/consulta.component';
import { CadastroClienteComponent } from './app/cliente/cadastro/cadastro.component';

import { ConsultaContaComponent } from './app/conta/consulta/consulta.component';
import { CadastroContaComponent } from './app/conta/cadastro/cadastro.component';

import { ConsultaMovimentacaoComponent } from './app/movimentacao/consulta/consulta.component';
import { CadastroMovimentacaoComponent } from './app/movimentacao/cadastro/cadastro.component';

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
           
    { path: 'consulta-movimentacao',                 component: ConsultaMovimentacaoComponent },
    { path: 'cadastro-movimentacao',                 component: CadastroMovimentacaoComponent },
    { path: 'cadastro-movimentacao/:idMovimentacao', component: CadastroMovimentacaoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
