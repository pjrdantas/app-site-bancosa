import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ConsultaComponent } from './app/nota/consulta/consulta.component';

import {CadastroComponent} from './app/nota/cadastro/cadastro.component';

import { HomeComponent } from './app/home/home.component';

const appRoutes: Routes = [
    { path: 'home',                    component: HomeComponent },
    { path: '',                        component: HomeComponent },
    { path: 'consulta-nota',         component: ConsultaComponent },
    { path: 'cadastro-nota',         component: CadastroComponent },
    { path: 'cadastro-nota/:idNotas', component: CadastroComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
