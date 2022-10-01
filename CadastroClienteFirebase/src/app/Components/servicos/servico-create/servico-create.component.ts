import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicos } from 'src/app/Models/Servicos/Servicos';
import { ServicosService } from 'src/app/Services/Servicos/servicos.service';

@Component({
  selector: 'app-servico-create',
  templateUrl: './servico-create.component.html',
  styleUrls: ['./servico-create.component.scss']
})
export class ServicoCreateComponent implements OnInit {

  servicos: Servicos = {
    nome: '',
    tipo: '',
    preco: '',
    descricao: ''
  }

  constructor(
    private servService: ServicosService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  create() {
    if(this.servicos){
      this.servService.create(this.servicos)
      .then((res)=> {
        this.servService.message('Serviço Criado com Sucesso');
        console.log(res)
      })
      .catch((error) => {
        console.log(error) 
      })
    }
    this.router.navigate(['servicos']);
  }

  cancel() {
    this.router.navigate(['servicos']);
  }

}
