import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ServicosService } from 'src/app/Services/Servicos/servicos.service';


@Component({
  selector: 'app-servico-read',
  templateUrl: './servico-read.component.html',
  styleUrls: ['./servico-read.component.scss']
})
export class ServicoReadComponent implements OnInit {

  displayedColumns: string[] = ['icon', 'ID', 'nome', 'tipo', 'preco', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

 
  constructor(
    private router: Router,
    private servService: ServicosService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getAllServico();
  }

  getAllServico() {
    this.servService.findAll()
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

  CriarServico(){
    this.router.navigate(["servicos/add"]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
