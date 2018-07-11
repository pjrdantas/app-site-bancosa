import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {AgenciaService} from '../../services/agencia.service';

import {TbAgencia} from '../../services/agencia';

import {Response} from '../../services/response';

@Component({
    selector: 'app-consulta-agencia',
    templateUrl: './consulta.component.html',
    styleUrls: ['./consulta.component.css']
  })
  export class ConsultaAgenciaComponent implements OnInit {

    private agencias: TbAgencia[] = new Array();
    private titulo: string;

    constructor(private agenciaService: AgenciaService,
                private router: Router) {}

    ngOnInit() {

      /*SETA O TíTULO */
      this.titulo = 'Lista de Agencias';

      /*CHAMA O SERVIÇO E RETORNA TODAS AS AGENCIAS CADASTRADAS */
      this.agenciaService.getTbAgencias().subscribe(res => this.agencias = res);
    }

    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA
     * LINHA DA TABELA*/
    excluir(idAgencia: number, index: number): void {

      if (confirm('Deseja realmente excluir esse registro?')) {

        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.agenciaService.excluirTbAgencia(idAgencia).subscribe(response => {

              /**PEGA O RESPONSE DO SERVIÇO */
              const res: Response = <Response>response;

              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if (res.codigo === 1) {
                alert(res.mensagem);
                this.agencias.splice(index, 1);
              } else {
                /*0 = EXCEPTION GERADA NO SERVIÇO JAVA */
                alert(res.mensagem);
              }
          },
          (erro) => {
               /*MOSTRA ERROS NÃO TRATADOS */
               alert(erro);
          });
      }

    }

    editar(idAgencia: number): void {

      this.router.navigate(['/cadastro-agencia', idAgencia]);

    }

  }
