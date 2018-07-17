import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import {AgenciaService} from '../../../services/agencia.service';
import {BancoService} from '../../../services/banco.service';

import {TbAgencia} from '../../../services/agencia';
import {TbBanco} from '../../../services/banco';

import {Response} from '../../../services/response';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-cadastro-agencia',
  templateUrl: './cadastro.component.html'
})
export class CadastroAgenciaComponent implements OnInit {

  private titulo: string;
  private agencia: TbAgencia = new TbAgencia();
  private bancos: TbBanco[] = new Array();

  constructor(private agenciaService: AgenciaService,
    private bancoService: BancoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}


  ngOnInit() {

    this.bancoService.getTbBancos().subscribe(resp => this.bancos = resp);

    this.activatedRoute.params.subscribe(parametro => {


      if (parametro['idAgencia'] === undefined) {

        this.titulo = 'Inclusão de Agencias';
      } else {
        this.titulo = 'Editar Agencias';
        this.agenciaService.getTbAgencia(Number(parametro['idAgencia'])).subscribe(res => this.agencia = res);
      }
    });
  }


  salvar(): void {


    if (this.agencia.idAgencia === undefined) {


      this.agenciaService.addTbAgencia(this.agencia).subscribe(response => {

        const res: Response = <Response>response;

        if (res.codigo === 1) {
          alert(res.mensagem);
          this.agencia = new TbAgencia();
          this.router.navigate(['/consulta-agencia']);
        } else {

          alert(res.mensagem);
        }
      },
        (erro) => {
          alert(erro);
        });

    } else {

      this.agenciaService.atualizarTbAgencia(this.agencia).subscribe(response => {

        const res: Response = <Response>response;


        if (res.codigo === 1) {
          alert(res.mensagem);
          this.router.navigate(['/consulta-agencia']);
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
