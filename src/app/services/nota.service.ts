import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import { ajax } from 'rxjs/ajax';
import { TestScheduler } from 'rxjs/testing';

import {TbNota} from '../services/nota';
import {ConfigService} from './config.service';

@Injectable()
export class NotaService {

    private baseUrlService = '';
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http,
                private configService: ConfigService) {

        /**SETANDO A URL DO SERVIÃ‡O REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/nota/';

        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers ({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions ({ headers: this.headers });
    }

    /**CONSULTA TODAS AS NOTAS CADASTRADAS */
    getTbNotas() {
        return this.http.get(this.baseUrlService).pipe(map(res => res.json()));
    }

    /**ADICIONA UMA NOVA NOTA */
    addTbNota(nota: TbNota) {

        return this.http.post(this.baseUrlService, JSON.stringify(nota), this.options).pipe(
        map(res => res.json()));
    }
    /**EXCLUI UMA NOTA */
    excluirTbNota(idNotas: number) {

        return this.http.delete(this.baseUrlService + idNotas).pipe(map(res => res.json()));
    }

    /**CONSULTA UMA NOTA PELO ID */
    getTbNota(idNotas: number) {

        return this.http.get(this.baseUrlService + idNotas).pipe(map(res => res.json()));
    }

    /**ATUALIZA INFORMAÃ‡Ã•ES DA NOTA */
    atualizarTbNota(nota: TbNota) {

        return this.http.put(this.baseUrlService, JSON.stringify(nota), this.options).pipe(
        map(res => res.json()));
    }

}
