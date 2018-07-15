import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import {TbCliente} from '../services/cliente';
import {ConfigService} from './config.service';

@Injectable()
export class ClienteService {

    private baseUrlService = '';
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http,
                private configService: ConfigService) {

 
        this.baseUrlService = configService.getUrlService() + '/cliente/';


        this.headers = new Headers ({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions ({ headers: this.headers });
    }


    getTbClientes() {
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

  
    addTbCliente(cliente: TbCliente) {
       
        
        let foo = { idcliente: cliente.idCliente, clienteNome: cliente.clienteNome, clienteSenha: cliente.clienteSenha, clienteIAgencia: cliente.clienteIAgencia,  b: function() {} };
        
        return this.http.post(this.baseUrlService, JSON.stringify(foo), this.options).map(res => res.json());
    }
    
    excluirTbCliente(idcliente: number) {

      return this.http.delete(this.baseUrlService + idcliente).map(res => res.json());
    }

    
    getTbCliente(idcliente: number) {

        return this.http.get(this.baseUrlService + idcliente).map(res => res.json());
    }

 
    atualizarTbCliente(cliente: TbCliente) {

        return this.http.put(this.baseUrlService, JSON.stringify(cliente), this.options).map(res => res.json());
    }

}
