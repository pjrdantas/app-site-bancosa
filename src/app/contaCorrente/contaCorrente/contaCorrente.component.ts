import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import {TbCliente} from '../../services/cliente';
import {ClienteService} from '../../services/cliente.service';

import {TbConta} from '../../services/conta';
import {ContaService} from '../../services/conta.service';

import {Response} from '../../services/response';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-banco-contaCorrente',
  templateUrl: './contaCorrente.component.html'
})
export class ContaCorrenteComponent implements OnInit {

  private cliente: TbCliente = new TbCliente();
  private conta: TbConta = new TbConta();

  constructor(private clienteService: ClienteService,
              private contaService: ContaService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}


  ngOnInit() {

    this.activatedRoute.params.subscribe(parametro => {
      
      this.contaService.getTbContaCliente(Number(parametro['contaIdCliente'])).subscribe(res => this.conta = res);      
    });    

  }
  
  saque(contaIdCliente: number): void {
    
    this.router.navigate(['/saqueCc', contaIdCliente]);
  }
  
   deposito(idConta: number): void {
       
    
    this.router.navigate(['/depositoCc', idConta]);
  }
  
     extrato(idConta: number): void {
       
    
    this.router.navigate(['/extratoCC', idConta]);
  }

}
