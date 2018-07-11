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

        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/agencia/';

        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers ({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions ({ headers: this.headers });
    }

    /**CONSULTA TODAS AS AGENCIAS CADASTRADAS */
    getTbAgencias() {
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

    /**ADICIONA UMA NOVA AGENCIA */
    addTbAgencia(agencia: TbAgencia) {
       
        
        let foo = { idAgencia: agencia.idAgencia, tbAgenciaCodigo: agencia.tbAgenciaCodigo, tbAgenciaDigito: agencia.tbAgenciaDigito, tbAgenciaidBanco: 10,  b: function() {} };
        alert(agencia.tbAgenciaidBanco);
        return this.http.post(this.baseUrlService, JSON.stringify(foo), this.options).map(res => res.json());
    }
    /**EXCLUI UMA AGENCIA */
    excluirTbAgencia(idAgencia: number) {

      return this.http.delete(this.baseUrlService + idAgencia).map(res => res.json());
    }

    /**CONSULTA UMA AGENCIA PELO ID */
    getTbAgencia(idAgencia: number) {

        return this.http.get(this.baseUrlService + idAgencia).map(res => res.json());
    }

    /**ATUALIZA INFORMAÇÕES DA AGENCIA */
    atualizarTbAgencia(agencia: TbAgencia) {

        return this.http.put(this.baseUrlService, JSON.stringify(agencia), this.options).map(res => res.json());
    }

}
