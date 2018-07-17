import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {ClienteService} from '../../../services/cliente.service';

import {TbCliente} from '../../../services/cliente';

import {Response} from '../../../services/response';

@Component({
    selector: 'app-consulta-cliente',
    templateUrl: './consulta.component.html',
    styleUrls: ['./consulta.component.css']
  })
  export class ConsultaClienteComponent implements OnInit {

    private clientes: TbCliente[] = new Array();
    private titulo: string;

    constructor(private clienteService: ClienteService,
                private router: Router) {}

    ngOnInit() {

     
      this.titulo = 'Lista de Clientes';

      
      this.clienteService.getTbClientes().subscribe(res => this.clientes = res);
    }

   
    excluir(idCliente: number, index: number): void {

      if (confirm('Deseja realmente excluir esse registro?')) {

       
        this.clienteService.excluirTbCliente(idCliente).subscribe(response => {

             
              const res: Response = <Response>response;

             
              if (res.codigo === 1) {
                alert(res.mensagem);
                this.clientes.splice(index, 1);
              } else {
        
                alert(res.mensagem);
              }
          },
          (erro) => {
       
               alert(erro);
          });
      }

    }

    editar(idCliente: number): void {
       
      this.router.navigate(['/cadastro-cliente', idCliente]);

    }

  }
