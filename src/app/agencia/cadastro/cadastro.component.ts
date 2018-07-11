import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import {AgenciaService} from '../../services/agencia.service';
import {BancoService} from '../../services/banco.service';

import {TbAgencia} from '../../services/agencia';
import {TbBanco} from '../../services/banco';

import {Response} from '../../services/response';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-cadastro-agencia',
    templateUrl: './cadastro.component.html'
  })
  export class CadastroAgenciaComponent implements OnInit {

    private titulo: string;
    private agencia: TbAgencia = new TbAgencia();
    private bancos: TbBanco[] = new Array();



    constructor(private agenciaService: AgenciaService,
                private bancoService: BancoService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {}

    /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {

      this.activatedRoute.params.subscribe(parametro =>  {


        if (parametro['idAgencia'] === undefined) {

          this.titulo = 'Inclusão de Agencias';
          /*CHAMA O SERVIÇO E RETORNA TODAS OS BANCOS CADASTRADAS */
          this.bancoService.getTbBancos().subscribe(resp => this.bancos = resp);
        } else {

          this.titulo = 'Editar Agencias';
          this.agenciaService.getTbAgencia(Number(parametro['idAgencia'])).subscribe(res => this.agencia = res);
        }


      });
    }


    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    salvar(): void {

      /*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
      if (this.agencia.idAgencia === undefined) {

        /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA AGENCIA */




        this.agenciaService.addTbAgencia(this.agencia).subscribe(response => {


           // PEGA O RESPONSE DO RETORNO DO SERVIÇO
           const res: Response = <Response>response;

           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
           if (res.codigo === 1) {
            alert(res.mensagem);
            this.agencia = new TbAgencia();
            this.router.navigate(['/consulta-agencia']);
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
        this.agenciaService.atualizarTbAgencia(this.agencia).subscribe(response => {

        // PEGA O RESPONSE DO RETORNO DO SERVIÇO
        const res: Response = <Response>response;

         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
        if (res.codigo === 1) {
          alert(res.mensagem);
          this.router.navigate(['/consulta-agencia']);
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
