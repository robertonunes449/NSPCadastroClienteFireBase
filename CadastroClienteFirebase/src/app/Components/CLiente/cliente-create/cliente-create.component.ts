import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente/Cliente';
import { CliServiceService } from 'src/app/Services/Cliente/cli-service.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  id_col: String = "";

  cliente: Cliente = {
    nome: "",
    email: "",
    nascimento: new Date,
    profissao: "",
    calcado: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cep: "",
    bairro: "",
    cidade: "",
    telefone: "",
    celular: "",
    contato: "",
    uf: ""
  };

  constructor(
    private cliService: CliServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id_col = this.route.snapshot.paramMap.get("id_col")!;
  }

  create() {
    if(this.cliente){
      this.cliService.create(this.cliente, this.id_col)      
      .then((res) => {
        this.cliService.message('Cliente Criado com Sucesso');
        console.log(res)
      })
      .catch((error) => {
        this.cliService.message('Erro ao Criar o Cliente');
        console.log(error) 
      })
    }
    this.router.navigate([`clientes/${this.id_col}/cliente`]);
  }

  cancel() {
    this.router.navigate([`clientes/${this.id_col}/cliente`]);
  }

}
