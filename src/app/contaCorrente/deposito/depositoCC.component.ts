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
  selector: 'app-banco-depositoCc',
  templateUrl: './depositoCc.component.html'
})
export class DepositoCcComponent implements OnInit {

 
  private conta: TbConta = new TbConta();
  private movimentacao: TbMovimentacao = new TbMovimentacao();

  constructor(private contaService: ContaService,
              private movimentacaoService: MovimentacaoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}


  ngOnInit() {

     this.activatedRoute.params.subscribe(parametro => {               
        this.contaService.getTbConta(Number(parametro['idConta'])).subscribe(res => this.conta = res); 
            
    });   
    
  }
  
  salvar(idConta: number): void {
      
       
       this.movimentacao.movimentacaoIdConta = idConta; 
       this.movimentacaoService.addTbMovimentacao(this.movimentacao).subscribe(response => {
       
        const res: Response = <Response>response;

        if (res.codigo === 1) {
          alert(res.mensagem);
          this.movimentacao = new TbMovimentacao();
          this.router.navigate(['/contaCorrente', this.conta.contaIdCliente]);
        } else {

          alert(res.mensagem);
        }
      },
        (erro) => {
          alert(erro);
        });
    }
  
  retornar(contaIdCliente: number): void {
    
    this.router.navigate(['/contaCorrente', contaIdCliente]);
  }

}
