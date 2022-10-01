import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicos } from 'src/app/Models/Servicos/Servicos';
import { ServicosService } from 'src/app/Services/Servicos/servicos.service';

@Component({
  selector: 'app-servico-delete',
  templateUrl: './servico-delete.component.html',
  styleUrls: ['./servico-delete.component.scss']
})
export class ServicoDeleteComponent implements OnInit {

  servicos: Servicos = {
    nome: '',
    tipo: '',
    preco: '',
    descricao: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servService: ServicosService
  ) { }

  ngOnInit() {
    this.servicos.id = this.route.snapshot.paramMap.get('id')! 
    this.finById()
  }

  finById(): void {
    this.servService.findById(this.servicos)
    .subscribe ((resposta) => {
      this.servicos.nome = resposta.nome
      this.servicos.tipo = resposta.tipo
      this.servicos.preco = resposta.preco
      this.servicos.descricao = resposta.descricao
      console.log(resposta)
    })
  }

  delete() {
    if(this.servicos) {
      this.servService.delete(this.servicos.id)
      .then((res) => {
        this.servService.message('Serviço Excluido com Sucesso!!!')
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
