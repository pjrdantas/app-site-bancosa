import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import {ContaService} from '../../../services/conta.service';
import {AgenciaService} from '../../../services/agencia.service';
import {ClienteService} from '../../../services/cliente.service';

import {TbConta} from '../../../services/conta';
import {TbAgencia} from '../../../services/agencia';
import {TbCliente} from '../../../services/cliente';

import {Response} from '../../../services/response';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro.component.html'
})
export class CadastroContaComponent implements OnInit {

  private titulo: string;
  private conta: TbConta = new TbConta();
  private agencias: TbAgencia[] = new Array();
  private clientes: TbCliente[] = new Array();

  constructor(private contaService: ContaService,
    private agenciaService: AgenciaService,
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}


  ngOnInit() {

    this.agenciaService.getTbAgencias().subscribe(respAgencia => this.agencias = respAgencia);
    this.clienteService.getTbClientes().subscribe(respCliente => this.clientes = respCliente);

    this.activatedRoute.params.subscribe(parametro => {


      if (parametro['idConta'] === undefined) {

        this.titulo = 'Inclusao de Contas';
      } else {
        this.titulo = 'Editar Contas';
        this.contaService.getTbConta(Number(parametro['idConta'])).subscribe(res => this.conta = res);
      }
    });
  }


  salvar(): void {


    if (this.conta.idConta === undefined) {


      this.contaService.addTbConta(this.conta).subscribe(response => {

        const res: Response = <Response>response;

        if (res.codigo === 1) {
          alert(res.mensagem);
          this.conta = new TbConta();
          this.router.navigate(['/consulta-conta']);
        } else {

          alert(res.mensagem);
        }
      },
        (erro) => {
          alert(erro);
        });

    } else {

      this.contaService.atualizarTbConta(this.conta).subscribe(response => {

        const res: Response = <Response>response;


        if (res.codigo === 1) {
          alert(res.mensagem);
          this.router.navigate(['/consulta-conta']);
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
