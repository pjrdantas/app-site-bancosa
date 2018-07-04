import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {NotaService} from '../../services/nota.service';

import {TbNota} from '../../services/nota';

import {Response} from '../../services/response';

@Component({
    selector: 'app-consulta-nota',
    templateUrl: './consulta.component.html',
    styleUrls: ['./consulta.component.css']
  })
  export class ConsultaComponent implements OnInit {

    private notas: TbNota[] = new Array();
    private titulo: string;

    constructor(private notaService: NotaService,
                private router: Router) {}

    ngOnInit() {

      /*SETA O TÃ�TULO */
      this.titulo = 'Lista de Notas';

      /*CHAMA O SERVIÃ‡O E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.notaService.getTbNotas().subscribe(res => this.notas = res);
    }

    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÃ‡ÃƒO EXCLUIR DE UMA
     * LINHA DA TABELA*/
    excluir(idNotas: number, index: number): void {

      if (confirm('Deseja realmente excluir esse registro?')) {

        /*CHAMA O SERVIÃ‡O PARA REALIZAR A EXCLUSÃƒO */
        this.notaService.excluirTbNota(idNotas).subscribe(response => {

              /**PEGA O RESPONSE DO SERVIÃ‡O */
              const res: Response = <Response>response;

              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÃ‡O E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if (res.codigo === 1) {
                alert(res.mensagem);
                this.notas.splice(index, 1);
              } else {
                /*0 = EXCEPTION GERADA NO SERVIÃ‡O JAVA */
                alert(res.mensagem);
              }
          },
          (erro) => {
               /*MOSTRA ERROS NÃƒO TRATADOS */
               alert(erro);
          });
      }

    }

    editar(idNotas: number): void {

      this.router.navigate(['/cadastro-nota', idNotas]);

    }

  }
