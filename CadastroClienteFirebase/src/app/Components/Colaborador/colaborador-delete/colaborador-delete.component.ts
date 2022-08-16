import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { ColServiceService } from 'src/app/Services/Colaborador/col-service.service';

@Component({
  selector: 'app-colaborador-delete',
  templateUrl: './colaborador-delete.component.html',
  styleUrls: ['./colaborador-delete.component.scss']
})
export class ColaboradorDeleteComponent implements OnInit {

  colaboradores: Colaborador = {
    nome: '',
    email: '',
    nascimento: new Date,
    funcao: '',
    logradouro: '',
    numero: '',
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    telefone: '',
    celular: '',
    uf: ''
  }

  constructor(
    private colService: ColServiceService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.colaboradores.id = this.route.snapshot.paramMap.get('id')!    
    this.findById()
  }

  findById(): void {
    this.colService.findById(this.colaboradores)
    .subscribe((resposta) => {
      this.colaboradores.nome = resposta.nome
      this.colaboradores.email = resposta.email
      this.colaboradores.nascimento = resposta.nascimento
      this.colaboradores.funcao = resposta.funcao
      this.colaboradores.logradouro = resposta.logradouro
      this.colaboradores.numero = resposta.numero
      this.colaboradores.complemento = resposta.complemento
      this.colaboradores.cep = resposta.cep
      this.colaboradores.bairro = resposta.bairro
      this.colaboradores.cidade = resposta.cidade
      this.colaboradores.telefone = resposta.telefone
      this.colaboradores.celular = resposta.celular
      this.colaboradores.uf = resposta.uf
      console.log(resposta)
    })
  }

  delete() {
    if(this.colaboradores) {
      this.colService.delete(this.colaboradores.id)
      .then((res) => {
        this.colService.message('Colaborador Excluído com Sucesso!!!');
        console.log(res)
      })
      .catch((error)=> {
        console.log(error)
      })
    }
    this.router.navigate(['colaboradores']);
  }

  cancel() {
    this.router.navigate(['colaboradores']);
  }
}
