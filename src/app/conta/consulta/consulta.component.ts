import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {ContaService} from '../../services/conta.service';

import {TbConta} from '../../services/conta';

import {Response} from '../../services/response';

@Component({
    selector: 'app-consulta-conta',
    templateUrl: './consulta.component.html',
    styleUrls: ['./consulta.component.css']
  })
  export class ConsultaContaComponent implements OnInit {

    private contas: TbConta[] = new Array();
    private titulo: string;

    constructor(private contaService: ContaService,
                private router: Router) {}

    ngOnInit() {

 
      this.titulo = 'Lista de Contas';

    
      this.contaService.getTbContas().subscribe(res => this.contas = res);
    }


    excluir(idConta: number, index: number): void {

      if (confirm('Deseja realmente excluir esse registro?')) {

     
        this.contaService.excluirTbConta(idConta).subscribe(response => {

            
              const res: Response = <Response>response;

 
              if (res.codigo === 1) {
                alert(res.mensagem);
                this.contas.splice(index, 1);
              } else {
          
                alert(res.mensagem);
              }
          },
          (erro) => {
         
               alert(erro);
          });
      }

    }

    editar(idConta: number): void {
       
      this.router.navigate(['/cadastro-conta', idConta]);

    }

  }
