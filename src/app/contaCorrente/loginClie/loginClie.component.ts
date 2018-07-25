import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';

import {TbCliente} from '../../services/cliente';
import {ClienteService} from '../../services/cliente.service';

import {TbConta} from '../../services/conta';
import {ContaService} from '../../services/conta.service';

import {Response} from '../../services/response';


@Component({
  selector: 'app-banco-loginClie',
  templateUrl: './loginClie.component.html',
  styleUrls: ['./loginClie.component.css']
})
export class LoginClieComponent implements OnInit {

  private contaIdCliente: number;
  private clientes: TbCliente[] = new Array();
  private cliente: TbCliente = new TbCliente();
  private conta: TbConta = new TbConta();

  constructor(private clienteService: ClienteService,
              private contaService: ContaService,
              private router: Router) {}


  ngOnInit() {

    this.clienteService.getTbClientes().subscribe(res => this.clientes = res);
  }

  login(idCliente: number): void {

    this.router.navigate(['/contaCorrente', idCliente]);
    
  }

}

