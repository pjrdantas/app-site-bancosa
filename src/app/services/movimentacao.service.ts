import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
import {RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

import {TbMovimentacao} from '../services/movimentacao';
import {ConfigService} from './config.service';

@Injectable()
export class MovimentacaoService {

  private baseUrlService = '';
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http,
    private configService: ConfigService) {


    this.baseUrlService = configService.getUrlService() + '/movimentacao/';


    this.headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
    this.options = new RequestOptions({headers: this.headers});
  }


  getTbMovimentacaos() {
    return this.http.get(this.baseUrlService).map(res => res.json());
  }


  addTbMovimentacao(movimentacao: TbMovimentacao) {


    let foo = {idMovimentacao: movimentacao.idMovimentacao, movimentacaoCredito: movimentacao.movimentacaoCredito, 
      movimentacaoData: movimentacao.movimentacaoData, movimentacaoDebito: movimentacao.movimentacaoDebito, 
      movimentacaoIdConta: movimentacao.movimentacaoIdConta, b: function() {}};

    return this.http.post(this.baseUrlService, JSON.stringify(foo), this.options).map(res => res.json());
  }

  excluirTbMovimentacao(idMovimentacao: number) {

    return this.http.delete(this.baseUrlService + idMovimentacao).map(res => res.json());
  }


  getTbMovimentacao(idMovimentacao: number) {

    return this.http.get(this.baseUrlService + idMovimentacao).map(res => res.json());
  }


  atualizarTbMovimentacao(movimentacao: TbMovimentacao) {

    return this.http.put(this.baseUrlService, JSON.stringify(movimentacao), this.options).map(res => res.json());
  }

}
