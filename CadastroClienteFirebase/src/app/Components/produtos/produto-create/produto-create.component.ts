import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from 'src/app/Models/Produtos/Produtos';
import { ProdutosService } from 'src/app/Services/Produtos/produtos.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.scss']
})
export class ProdutoCreateComponent implements OnInit {

  produtos: Produtos = {
    nome: '',
    quantidade: '',
    validade: new Date,
    preco: '',
    codigoDeBarra: ''
  }

  constructor(
    private prodService: ProdutosService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  create() {
    if(this.produtos){
      this.prodService.create(this.produtos)
      .then((res) => {
        this.prodService.message('Produto criado com Sucesso.')
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
    }
    this.router.navigate(['produtos']);
  }

  cancel() {
    this.router.navigate(['produtos']);
  }
  
}
