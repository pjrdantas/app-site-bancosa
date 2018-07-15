import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import {ClienteService} from '../../services/cliente.service';
import {AgenciaService} from '../../services/agencia.service';

import {TbCliente} from '../../services/cliente';
import {TbAgencia} from '../../services/agencia';

import {Response} from '../../services/response';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro.component.html'
})
export class CadastroClienteComponent implements OnInit {

  private titulo: string;
  private cliente: TbCliente = new TbCliente();
  private agencias: TbAgencia[] = new Array();

  constructor(private clienteService: ClienteService,
    private agenciaService: AgenciaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}


  ngOnInit() {

    this.agenciaService.getTbAgencias().subscribe(resp => this.agencias = resp);

    this.activatedRoute.params.subscribe(parametro => {


      if (parametro['idCliente'] === undefined) {

        this.titulo = 'Inclusão de Clientes';
      } else {
        this.titulo = 'Editar Clientes';
        this.clienteService.getTbCliente(Number(parametro['idCliente'])).subscribe(res => this.cliente = res);
      }
    });
  }


  salvar(): void {


    if (this.cliente.idCliente === undefined) {


      this.clienteService.addTbCliente(this.cliente).subscribe(response => {

        const res: Response = <Response>response;

        if (res.codigo === 1) {
          alert(res.mensagem);
          this.cliente = new TbCliente();
          this.router.navigate(['/consulta-cliente']);
        } else {

          alert(res.mensagem);
        }
      },
        (erro) => {
          alert(erro);
        });

    } else {

      this.clienteService.atualizarTbCliente(this.cliente).subscribe(response => {

        const res: Response = <Response>response;


        if (res.codigo === 1) {
          alert(res.mensagem);
          this.router.navigate(['/consulta-cliente']);
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
