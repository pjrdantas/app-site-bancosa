import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { MenuAdmComponent } from './app/adm/menuAdm/menuAdm.component';

import { ConsultaBancoComponent } from './app/adm/banco/consulta/consulta.component';
import { CadastroBancoComponent } from './app/adm/banco/cadastro/cadastro.component';

import { ConsultaAgenciaComponent } from './app/adm/agencia/consulta/consulta.component';
import { CadastroAgenciaComponent } from './app/adm/agencia/cadastro/cadastro.component';

import { ConsultaClienteComponent } from './app/adm/cliente/consulta/consulta.component';
import { CadastroClienteComponent } from './app/adm/cliente/cadastro/cadastro.component';

import { ConsultaContaComponent } from './app/adm/conta/consulta/consulta.component';
import { CadastroContaComponent } from './app/adm/conta/cadastro/cadastro.component';

import { MenuClieComponent } from './app/contaCorrente/menuClie/menuClie.component';
import { LoginClieComponent } from './app/contaCorrente/loginClie/loginClie.component';
import { ContaCorrenteComponent } from './app/contaCorrente/contaCorrente/contaCorrente.component';
import { DepositoCcComponent } from './app/contaCorrente/deposito/depositoCC.component';
import { SaqueCcComponent } from './app/contaCorrente/saque/saqueCC.component';
import { ExtratoCcComponent } from './app/contaCorrente/extrato/extratoCC.component';


import { HomeComponent } from './app/home/home.component';

const appRoutes: Routes = [
    { path: 'home',                          component: HomeComponent },
    { path: '',                              component: HomeComponent },

   
    { path: 'banco-menuClie',                component: MenuClieComponent },
    { path: 'loginClie',                     component: LoginClieComponent },
    { path: 'contaCorrente',                 component: ContaCorrenteComponent },
    { path: 'contaCorrente/:contaIdCliente', component: ContaCorrenteComponent },
    { path: 'depositoCc/:idConta',           component: DepositoCcComponent },
    { path: 'saqueCc/:idConta',              component: SaqueCcComponent },
    { path: 'extratoCC/:idConta',            component: ExtratoCcComponent },
    
    { path: 'banco-menuAdm',                 component: MenuAdmComponent },
    { path: 'consulta-banco',                component: ConsultaBancoComponent },
    { path: 'cadastro-banco',                component: CadastroBancoComponent },
    { path: 'cadastro-banco/:idBanco',       component: CadastroBancoComponent },

    { path: 'consulta-agencia',              component: ConsultaAgenciaComponent },
    { path: 'cadastro-agencia',              component: CadastroAgenciaComponent },
    { path: 'cadastro-agencia/:idAgencia',   component: CadastroAgenciaComponent },
    
    { path: 'consulta-cliente',              component: ConsultaClienteComponent },
    { path: 'cadastro-cliente',              component: CadastroClienteComponent },
    { path: 'cadastro-cliente/:idCliente',   component: CadastroClienteComponent },
        
    { path: 'consulta-conta',                component: ConsultaContaComponent },
    { path: 'cadastro-conta',                component: CadastroContaComponent },
    { path: 'cadastro-conta/:idConta',       component: CadastroContaComponent }
           
   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
