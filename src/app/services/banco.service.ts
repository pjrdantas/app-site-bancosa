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

       
        this.baseUrlService = configService.getUrlService() + '/banco/';

       
        this.headers = new Headers ({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions ({ headers: this.headers });
    }

  
    getTbBancos() {
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

   
    addTbBanco(banco: TbBanco) {
        return this.http.post(this.baseUrlService, JSON.stringify(banco), this.options).map(res => res.json());
    }
    
    excluirTbBanco(idBanco: number) {

      return this.http.delete(this.baseUrlService + idBanco).map(res => res.json());
    }

   
    getTbBanco(idBanco: number) {
        return this.http.get(this.baseUrlService + idBanco).map(res => res.json());
    }

  
    atualizarTbBanco(banco: TbBanco) {
        return this.http.put(this.baseUrlService, JSON.stringify(banco), this.options).map(res => res.json());
    }

}
