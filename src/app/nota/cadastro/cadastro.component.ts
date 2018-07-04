import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import {NotaService} from '../../services/nota.service';

import {TbNota} from '../../services/nota';

import {Response} from '../../services/response';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-cadastro-nota',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
  })
  export class CadastroComponent implements OnInit {

    private titulo: string;
    private nota: TbNota = new TbNota();

    constructor(private notaService: NotaService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {}

    /*CARREGADO NA INICIALIZAÃ‡ÃƒO DO COMPONENTE */
    ngOnInit() {

      this.activatedRoute.params.subscribe(parametro =>  {

        if (parametro['idNotas'] === undefined) {

          this.titulo = 'Inclusão de valores de Notas';
        } else {

          this.titulo = 'Editar Valor de Notas';
          this.notaService.getTbNota(Number(parametro['idNotas'])).subscribe(res => this.nota = res);
        }


      });
    }

    /*FUNÃ‡ÃƒO PARA SALVAR UM NOVO REGISTRO OU ALTERAÃ‡ÃƒO EM UM REGISTRO EXISTENTE */
    salvar(): void {

      /*SE NÃƒO TIVER CÃ“DIGO VAMOS INSERIR UM NOVO REGISTRO */
      if (this.nota.idNotas === undefined) {

        /*CHAMA O SERVIÃ‡O PARA ADICIONAR UMA NOVA NOTA */
        this.notaService.addTbNota(this.nota).subscribe(response => {

           // PEGA O RESPONSE DO RETORNO DO SERVIÃ‡O
           const res: Response = <Response>response;

           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÃ�RIO PARA INSERIR UM NOVO REGISTRO*/
           if (res.codigo === 1) {
            alert(res.mensagem);
            this.nota = new TbNota();
            this.router.navigate(['/consulta-nota']);
           } else {
             /*
             ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
             NO SERVIDOR (CODIGO = 0)*/
             alert(res.mensagem);
           }
         },
         (erro) => {
           /**AQUI VAMOS MOSTRAR OS ERROS NÃƒO TRATADOS
             EXEMPLO: SE APLICAÃ‡ÃƒO NÃƒO CONSEGUIR FAZER UMA REQUEST NA API                        */
            alert(erro);
         });

      } else {

        /*AQUI VAMOS ATUALIZAR AS INFORMAÃ‡Ã•ES DE UM REGISTRO EXISTENTE */
        this.notaService.atualizarTbNota(this.nota).subscribe(response => {

        // PEGA O RESPONSE DO RETORNO DO SERVIÃ‡O
        const res: Response = <Response>response;

         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E REDIRECIONAR O USUÃ�RIO PARA A PÃ�GINA DE CONSULTA*/
        if (res.codigo === 1) {
          alert(res.mensagem);
          this.router.navigate(['/consulta-nota']);
        } else {
          /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
          NO SERVIDOR (CODIGO = 0)*/
           alert(res.mensagem);
         }
       },
       (erro) => {
         /**AQUI VAMOS MOSTRAR OS ERROS NÃƒO TRATADOS
          EXEMPLO: SE APLICAÃ‡ÃƒO NÃƒO CONSEGUIR FAZER UMA REQUEST NA API                        */
          alert(erro);
       });
      }

    }

  }
