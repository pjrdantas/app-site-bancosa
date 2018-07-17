import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {AgenciaService} from '../../../services/agencia.service';

import {TbAgencia} from '../../../services/agencia';

import {Response} from '../../../services/response';

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

 
      this.titulo = 'Lista de Agencias';

    
      this.agenciaService.getTbAgencias().subscribe(res => this.agencias = res);
    }


    excluir(idAgencia: number, index: number): void {

      if (confirm('Deseja realmente excluir esse registro?')) {

     
        this.agenciaService.excluirTbAgencia(idAgencia).subscribe(response => {

            
              const res: Response = <Response>response;

 
              if (res.codigo === 1) {
                alert(res.mensagem);
                this.agencias.splice(index, 1);
              } else {
          
                alert(res.mensagem);
              }
          },
          (erro) => {
         
               alert(erro);
          });
      }

    }

    editar(idAgencia: number): void {
       
      this.router.navigate(['/cadastro-agencia', idAgencia]);

    }

  }
