import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {BancoService} from '../../../services/banco.service';

import {TbBanco} from '../../../services/banco';

import {Response} from '../../../services/response';

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

    
      this.titulo = 'Lista de Bancos';

 
      this.bancoService.getTbBancos().subscribe(res => this.bancos = res);
    }


    excluir(idBanco: number, index: number): void {

      if (confirm('Deseja realmente excluir esse registro?')) {

     
        this.bancoService.excluirTbBanco(idBanco).subscribe(response => {

          
              const res: Response = <Response>response;

      
              if (res.codigo === 1) {
                alert(res.mensagem);
                this.bancos.splice(index, 1);
              } else {
  
                alert(res.mensagem);
              }
          },
          (erro) => {
     
               alert(erro);
          });
      }

    }

    editar(idBanco: number): void {
       
      this.router.navigate(['/cadastro-banco', idBanco]);

    }

  }
