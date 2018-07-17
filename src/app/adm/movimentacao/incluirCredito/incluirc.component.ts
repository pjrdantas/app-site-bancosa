import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import {MovimentacaoService} from '../../../services/movimentacao.service';
import {ContaService} from '../../../services/conta.service';

import {TbMovimentacao} from '../../../services/movimentacao';
import {TbConta} from '../../../services/conta';

import {Response} from '../../../services/response';

import {Observable} from 'rxjs';


@Component({
  selector: 'app-incluirc-movimentacao',
  templateUrl: './incluirc.component.html'
})
export class IncluirCMovimentacaoComponent implements OnInit {

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

        this.titulo = 'Inclusão de Crédito';
      
    });
  }


  salvar(): void {

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

  }

}
