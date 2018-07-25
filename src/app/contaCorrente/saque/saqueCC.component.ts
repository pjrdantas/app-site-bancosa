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
  selector: 'app-banco-saqueCc',
  templateUrl: './saqueCc.component.html'
})
export class SaqueCcComponent implements OnInit {

  
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
  
    sacar10(idConta: number): void {
      
       this.movimentacao.movimentacaoDebito = 10.0;
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
  
    sacar20(idConta: number): void {
      
       this.movimentacao.movimentacaoDebito = 20;
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
  
    sacar50(idConta: number): void {
      
       this.movimentacao.movimentacaoDebito = 50;
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
  
     sacar100(idConta: number): void {
      
       this.movimentacao.movimentacaoDebito = 100;
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
  
      sacar150(idConta: number): void {
      
       this.movimentacao.movimentacaoDebito = 150;
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
  
      sacar200(idConta: number): void {
      
       this.movimentacao.movimentacaoDebito = 200;
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
  
      sacar300(idConta: number): void {
      
       this.movimentacao.movimentacaoDebito = 300;
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
  
      sacar400(idConta: number): void {
      
       this.movimentacao.movimentacaoDebito = 400;
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
  
      sacar500(idConta: number): void {
      
       this.movimentacao.movimentacaoDebito = 500;
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
  
      sacar1000(idConta: number): void {
      
       this.movimentacao.movimentacaoDebito = 1000;
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
