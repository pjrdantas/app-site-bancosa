import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import {TbConta} from '../services/Conta';
import {ConfigService} from './config.service';

@Injectable()
export class ContaService {

    private baseUrlService = '';
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http,
                private configService: ConfigService) {

       
        this.baseUrlService = configService.getUrlService() + '/conta/';

        
        this.headers = new Headers ({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions ({ headers: this.headers });
    }

   
    getTbContas() {
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

 
    addTbConta(Conta: TbConta) {
       
        
        let foo = { idConta: Conta.idConta, contaDigito: Conta.contaDigito, contaNumero: Conta.contaNumero, contaIdAgencia: Conta.contaIdAgencia, contaIdCliente: Conta.contaIdCliente, b: function() {} };
        
        return this.http.post(this.baseUrlService, JSON.stringify(foo), this.options).map(res => res.json());
    }
    
    excluirTbConta(idConta: number) {

      return this.http.delete(this.baseUrlService + idConta).map(res => res.json());
    }

   
    getTbConta(idConta: number) {

        return this.http.get(this.baseUrlService + idConta).map(res => res.json());
    }

   
    atualizarTbConta(Conta: TbConta) {

        return this.http.put(this.baseUrlService, JSON.stringify(Conta), this.options).map(res => res.json());
    }

}
