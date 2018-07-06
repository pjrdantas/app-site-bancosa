import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import {TbBanco} from '../services/banco';
import {ConfigService} from './config.service';

@Injectable()
export class BancoService {

    private baseUrlService = '';
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http,
                private configService: ConfigService) {

        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/banco/';

        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers ({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions ({ headers: this.headers });
    }

    /**CONSULTA TODAS AS BANCOS CADASTRADAS */
    getTbBancos() {
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

    /**ADICIONA UMA NOVA BANCO */
    addTbBanco(banco: TbBanco) {

        return this.http.post(this.baseUrlService, JSON.stringify(banco), this.options)
        .map(res => res.json());
    }
    /**EXCLUI UMA BANCO */
    excluirTbBanco(idBanco: number) {

        return this.http.delete(this.baseUrlService + idBanco).map(res => res.json());
    }

    /**CONSULTA UMA BANCO PELO ID */
    getTbBanco(idBanco: number) {

        return this.http.get(this.baseUrlService + idBanco).map(res => res.json());
    }

    /**ATUALIZA INFORMAÇÕES DA BANCO */
    atualizarTbBanco(banco: TbBanco) {

        return this.http.put(this.baseUrlService, JSON.stringify(banco), this.options)
        .map(res => res.json());
    }

}
