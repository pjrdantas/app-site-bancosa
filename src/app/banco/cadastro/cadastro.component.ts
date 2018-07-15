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

    
    salvar(): void {

     
      if (this.banco.idBanco === undefined) {

      
        this.bancoService.addTbBanco(this.banco).subscribe(response => {

          
           const res: Response = <Response>response;


           if (res.codigo === 1) {
            alert(res.mensagem);
            this.banco = new TbBanco();
            this.router.navigate(['/consulta-banco']);
           } else {

             alert(res.mensagem);
           }
         },
         (erro) => {

            alert(erro);
         });

      } else {

    
        this.bancoService.atualizarTbBanco(this.banco).subscribe(response => {

     
        const res: Response = <Response>response;

  
        if (res.codigo === 1) {
          alert(res.mensagem);
          this.router.navigate(['/consulta-banco']);
        } else {

           alert(res.mensagem);
         }
       },
       (erro) => {

          alert(erro);
       });
      }

    }

  }
