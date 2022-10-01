import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/Services/Produtos/produtos.service';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.scss']
})
export class ProdutoReadComponent implements OnInit {

  displayedColumns: string[] = ['icon', 'ID', 'nome', 'quantidade', 'validade', 'preco', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

 

  constructor(
    private router: Router,
    private prodService: ProdutosService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this. getAllColaborador()
  }

  getAllColaborador() {
    this.prodService.findAll()
    .subscribe({
      next: (res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while Fetching the Records!")
      }
    })
  }

  CriarProduto(){
    this.router.navigate(["produtos/add"]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
