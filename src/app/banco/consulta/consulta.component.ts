import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {BancoService} from '../../services/banco.service';

import {TbBanco} from '../../services/banco';

import {Response} from '../../services/response';

@Component({
    selector: 'app-consulta-banco',
    templateUrl: './consulta.component.html',
    styleUrls: ['./consulta.component.css']
  })
  export class ConsultaBancoComponent implements OnInit {

    private bancos: TbBanco[] = new Array();
    private titulo: string;

    constructor(private bancoService: BancoService,
                private router: Router) {}

    ngOnInit() {

      /*SETA O TíTULO */
      this.titulo = 'Lista de Bancos';

      /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.bancoService.getTbBancos().subscribe(res => this.bancos = res);
    }

    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA
     * LINHA DA TABELA*/
    excluir(idBanco: number, index: number): void {

      if (confirm('Deseja realmente excluir esse registro?')) {

        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.bancoService.excluirTbBanco(idBanco).subscribe(response => {

              /**PEGA O RESPONSE DO SERVIÇO */
              const res: Response = <Response>response;

              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if (res.codigo === 1) {
                alert(res.mensagem);
                this.bancos.splice(index, 1);
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

    editar(idBanco: number): void {

      this.router.navigate(['/cadastro-banco', idBanco]);

    }

  }
