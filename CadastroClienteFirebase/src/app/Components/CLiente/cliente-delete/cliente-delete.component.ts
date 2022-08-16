import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente/Cliente';
import { CliServiceService } from 'src/app/Services/Cliente/cli-service.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.scss']
})
export class ClienteDeleteComponent implements OnInit {

  id_col: string = "";

  cliente: Cliente = {
    nome: '',
    email: '',
    nascimento: new Date,
    profissao: '',
    calcado: '',
    logradouro: '',
    numero: '',
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    telefone: '',
    celular: '',
    contato: '',
    uf: ''
  }

  constructor(
    private cliService: CliServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id_col = this.route.snapshot.paramMap.get('id_col')!
    this.cliente.id = this.route.snapshot.paramMap.get('id')!    
    this.findById()
  }

  findById() {
    this.cliService.findById(this.cliente, this.id_col!)
    .subscribe((resposta) => {
      this.cliente.nome = resposta.nome
      this.cliente.email = resposta.email
      this.cliente.nascimento = resposta.nascimento
      this.cliente.profissao = resposta.profissao
      this.cliente.calcado = resposta.calcado
      this.cliente.logradouro = resposta.logradouro
      this.cliente.numero = resposta.numero
      this.cliente.complemento = resposta.complemento
      this.cliente.cep = resposta.cep
      this.cliente.bairro = resposta.bairro
      this.cliente.cidade = resposta.cidade
      this.cliente.telefone = resposta.telefone
      this.cliente.celular = resposta.celular
      this.cliente.contato = resposta.contato
      this.cliente.uf = resposta.uf
      console.log(resposta)
    })
  }

  delete() {
    if(this.cliente) {
      this.cliService.delete(this.cliente, this.id_col)
      .then((res) => {
        this.cliService.message('Cliente Excluido com Sucesso!!!');
        console.log(res)
      })
      .catch((error)=> {
        this.cliService.message('Erro ao Excluir o Cliente');
        console.log(error)
      })
    }
    this.router.navigate([`clientes/${this.id_col}/cliente`]);
  }

  cancel() {
    this.router.navigate([`clientes/${this.id_col}/cliente`]);
  }

}
