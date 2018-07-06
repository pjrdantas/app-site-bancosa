import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import {BancoService} from '../../services/banco.service';

import {TbBanco} from '../../services/banco';

import {Response} from '../../services/response';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-cadastro-banco',
    templateUrl: './cadastro.component.html'
  })
  export class CadastroBancoComponent implements OnInit {

    private titulo: string;
    private banco: TbBanco = new TbBanco();

    constructor(private bancoService: BancoService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {}

    /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {

      this.activatedRoute.params.subscribe(parametro =>  {

        if (parametro['idBanco'] === undefined) {

          this.titulo = 'Inclusão de Bancos';
        } else {

          this.titulo = 'Editar Bancos';
          this.bancoService.getTbBanco(Number(parametro['idBanco'])).subscribe(res => this.banco = res);
        }


      });
    }

    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    salvar(): void {

      /*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
      if (this.banco.idBanco === undefined) {

        /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA BANCO */
        this.bancoService.addTbBanco(this.banco).subscribe(response => {

           // PEGA O RESPONSE DO RETORNO DO SERVIÇO
           const res: Response = <Response>response;

           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
           if (res.codigo === 1) {
            alert(res.mensagem);
            this.banco = new TbBanco();
            this.router.navigate(['/consulta-banco']);
           } else {
             /*
             ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
             NO SERVIDOR (CODIGO = 0)*/
             alert(res.mensagem);
           }
         },
         (erro) => {
           /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
             EXEMPLO: SE APLICAÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */
            alert(erro);
         });

      } else {

        /*AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
        this.bancoService.atualizarTbBanco(this.banco).subscribe(response => {

        // PEGA O RESPONSE DO RETORNO DO SERVIÇO
        const res: Response = <Response>response;

         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
        if (res.codigo === 1) {
          alert(res.mensagem);
          this.router.navigate(['/consulta-banco']);
        } else {
          /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
          NO SERVIDOR (CODIGO = 0)*/
           alert(res.mensagem);
         }
       },
       (erro) => {
         /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
          EXEMPLO: SE APLICAÇÃO NNÃO CONSEGUIR FAZER UMA REQUEST NA API                        */
          alert(erro);
       });
      }

    }

  }
