import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import {MovimentacaoService} from '../../services/movimentacao.service';
import {ContaService} from '../../services/conta.service';

import {TbMovimentacao} from '../../services/movimentacao';
import {TbConta} from '../../services/conta';

import {Response} from '../../services/response';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-cadastro-movimentacao',
  templateUrl: './cadastro.component.html'
})
export class CadastroMovimentacaoComponent implements OnInit {

  private titulo: string;
  private movimentacao: TbMovimentacao = new TbMovimentacao();
  private contas: TbConta[] = new Array();

  constructor(private movimentacaoService: MovimentacaoService,
    private contaService: ContaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}


  ngOnInit() {

    this.contaService.getTbContas().subscribe(resp => this.contas = resp);

    this.activatedRoute.params.subscribe(parametro => {

      

      if (parametro['idMovimentacao'] === undefined) {

        this.titulo = 'Inclusão de Movimentacaos';
      } else {
        this.titulo = 'Editar Movimentacaos';
        this.movimentacaoService.getTbMovimentacao(Number(parametro['idMovimentacao'])).subscribe(res => this.movimentacao = res);
      }
    });
  }


  salvar(): void {


    if (this.movimentacao.idMovimentacao === undefined) {


      this.movimentacaoService.addTbMovimentacao(this.movimentacao).subscribe(response => {

        const res: Response = <Response>response;

        if (res.codigo === 1) {
          alert(res.mensagem);
          this.movimentacao = new TbMovimentacao();
          this.router.navigate(['/consulta-movimentacao']);
        } else {

          alert(res.mensagem);
        }
      },
        (erro) => {
          alert(erro);
        });

    } else {

      this.movimentacaoService.atualizarTbMovimentacao(this.movimentacao).subscribe(response => {

        const res: Response = <Response>response;


        if (res.codigo === 1) {
          alert(res.mensagem);
          this.router.navigate(['/consulta-movimentacao']);
        } else {

          alert(res.mensagem);
        }
      },
        (erro) => {
          
          alert(erro);
        });
    }

  }

}
