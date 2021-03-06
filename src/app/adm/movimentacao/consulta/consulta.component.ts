import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {MovimentacaoService} from '../../../services/movimentacao.service';

import {TbMovimentacao} from '../../../services/movimentacao';

import {Response} from '../../../services/response';

@Component({
    selector: 'app-consulta-movimentacao',
    templateUrl: './consulta.component.html',
    styleUrls: ['./consulta.component.css']
  })
  export class ConsultaMovimentacaoComponent implements OnInit {

    private movimentacaos: TbMovimentacao[] = new Array();
    private titulo: string;

    constructor(private movimentacaoService: MovimentacaoService,
                private router: Router) {}

    ngOnInit() {

 
      this.titulo = 'Lista de Movimentacoes';

    
      this.movimentacaoService.getTbMovimentacaos().subscribe(res => this.movimentacaos = res);
    }


  }
