import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import {TbAgencia} from '../services/agencia';
import {ConfigService} from './config.service';

@Injectable()
export class AgenciaService {

    private baseUrlService = '';
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http,
                private configService: ConfigService) {

       
        this.baseUrlService = configService.getUrlService() + '/agencia/';

        
        this.headers = new Headers ({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions ({ headers: this.headers });
    }

   
    getTbAgencias() {
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

 
    addTbAgencia(agencia: TbAgencia) {
       
        
        let foo = { idAgencia: agencia.idAgencia, agenciaCodigo: agencia.agenciaCodigo, agenciaDigito: agencia.agenciaDigito, idbancoAgencia: agencia.idbancoAgencia,  b: function() {} };
        
        return this.http.post(this.baseUrlService, JSON.stringify(foo), this.options).map(res => res.json());
    }
    
    excluirTbAgencia(idAgencia: number) {

      return this.http.delete(this.baseUrlService + idAgencia).map(res => res.json());
    }

   
    getTbAgencia(idAgencia: number) {

        return this.http.get(this.baseUrlService + idAgencia).map(res => res.json());
    }

   
    atualizarTbAgencia(agencia: TbAgencia) {

        return this.http.put(this.baseUrlService, JSON.stringify(agencia), this.options).map(res => res.json());
    }

}
