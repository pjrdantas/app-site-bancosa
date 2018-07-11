import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ConsultaNotaComponent } from './app/nota/consulta/consulta.component';
import { CadastroNotaComponent } from './app/nota/cadastro/cadastro.component';

import { ConsultaBancoComponent } from './app/banco/consulta/consulta.component';
import { CadastroBancoComponent } from './app/banco/cadastro/cadastro.component';

import { ConsultaAgenciaComponent } from './app/agencia/consulta/consulta.component';
import { CadastroAgenciaComponent } from './app/agencia/cadastro/cadastro.component';



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
    { path: 'cadastro-agencia/:idAgencia', component: CadastroAgenciaComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
