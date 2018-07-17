import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {NotaService} from '../../../services/nota.service';

import {TbNota} from '../../../services/nota';

import {Response} from '../../../services/response';

@Component({
    selector: 'app-consulta-nota',
    templateUrl: './consulta.component.html',
    styleUrls: ['./consulta.component.css']
  })
  export class ConsultaNotaComponent implements OnInit {

    private notas: TbNota[] = new Array();
    private titulo: string;

    constructor(private notaService: NotaService,
                private router: Router) {}

    ngOnInit() {

      /*SETA O TÍTULO */
      this.titulo = 'Lista de Notas';

      /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.notaService.getTbNotas().subscribe(res => this.notas = res);

    }

    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA
     * LINHA DA TABELA*/
    excluir(idNotas: number, index: number): void {

      if (confirm('Deseja realmente excluir esse registro?')) {

        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.notaService.excluirTbNota(idNotas).subscribe(response => {

              /**PEGA O RESPONSE DO SERVIÇO */
              const res: Response = <Response>response;

              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if (res.codigo === 1) {
                alert(res.mensagem);
                this.notas.splice(index, 1);
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

    editar(idNotas: number): void {

      this.router.navigate(['/cadastro-nota', idNotas]);

    }

  }
