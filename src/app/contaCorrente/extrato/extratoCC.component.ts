import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import {TbMovimentacao} from '../../services/movimentacao';
import {MovimentacaoService} from '../../services/movimentacao.service';

import {TbConta} from '../../services/conta';
import {ContaService} from '../../services/conta.service';

import {Response} from '../../services/response';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-banco-extratoCC',
  templateUrl: './extratoCC.component.html'
})
export class ExtratoCcComponent implements OnInit {

  private conta: TbConta = new TbConta();
  private movimentacao: TbMovimentacao = new TbMovimentacao();
  private movimentacoes: TbMovimentacao[] = new Array();

  constructor(private  movimentacaoService: MovimentacaoService,
              private contaService: ContaService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}


  ngOnInit() {

    this.activatedRoute.params.subscribe(parametro => {
      this.movimentacaoService.getTbMovimentacao(Number(parametro['idConta'])).subscribe(res => this.movimentacoes = res); 
    });  
    
    
    this.activatedRoute.params.subscribe(parametro => {     
        this.contaService.getTbConta(Number(parametro['idConta'])).subscribe(res => this.conta = res); 
             
    });  

  }
  
    retornar(contaIdCliente: number): void {
   
    this.router.navigate(['/contaCorrente', contaIdCliente]);
  }  


}
