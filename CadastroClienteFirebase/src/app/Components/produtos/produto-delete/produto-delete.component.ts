import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/Models/Produtos/Produtos';
import { ProdutosService } from 'src/app/Services/Produtos/produtos.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.scss']
})
export class ProdutoDeleteComponent implements OnInit {

  produtos: Produtos = {
    nome: '',
    quantidade: '',
    validade: new Date,
    preco: '',
    codigoDeBarra: ''
  }
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prodService: ProdutosService
  ) { }

  ngOnInit() {
    this.produtos.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.prodService.findById(this.produtos)
    .subscribe((resposta) => {
      this.produtos.nome = resposta.nome
      this.produtos.quantidade = resposta.quantidade
      this.produtos.preco = resposta.preco
      this.produtos.validade = resposta.validade
      this.produtos.codigoDeBarra = resposta.codigoDeBarra
      console.log(resposta)
    })
  }

  delete(){
    if(this.produtos) {
      this.prodService.delete(this.produtos.id)
      .then((res) => {
        this.prodService.message('Produto Excluido com Sucesso')
      })
      .catch((error) => {
        console.log(error)
      })
    }
    this.router.navigate(['produtos'])
  }

  cancel() {
    this.router.navigate(['produtos'])
  }

}
