import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { ColServiceService } from 'src/app/Services/Colaborador/col-service.service';

@Component({
  selector: 'app-colaborador-create',
  templateUrl: './colaborador-create.component.html',
  styleUrls: ['./colaborador-create.component.scss']
})
export class ColaboradorCreateComponent implements OnInit {

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
    private router: Router
  ) {  }

  ngOnInit() {
  }

  create() {
    if(this.colaboradores){
      this.colService.create(this.colaboradores)
      .then((res)=> {
        this.colService.message('Colaborador Criado com Sucesso');
        console.log(res)
      })
      .catch((error) => {
        console.log(error) 
      })
    }
    this.router.navigate(['colaboradores']);
  }

  cancel() {
    this.router.navigate(['colaboradores']);
  }

}
