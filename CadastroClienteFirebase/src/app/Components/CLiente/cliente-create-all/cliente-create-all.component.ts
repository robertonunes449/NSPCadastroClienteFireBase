import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente/Cliente';
import { CliServiceService } from 'src/app/Services/Cliente/cli-service.service';

@Component({
  selector: 'app-cliente-create-all',
  templateUrl: './cliente-create-all.component.html',
  styleUrls: ['./cliente-create-all.component.scss']
})
export class ClienteCreateAllComponent implements OnInit {

  displayedColumns: string[] = ['icon', 'ID', 'nome', 'nascimento', 'celular', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  id_col: string = "";

  clientes: Cliente[] = [];
  


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cliService: CliServiceService,
  ) { }

  ngOnInit(): void {
    this.id_col = this.route.snapshot.paramMap.get('id_col')!;  
    this.findAll();    
  }

  findAll(): void {
    this.cliService.findAllByColaborador(this.id_col)    
      .subscribe((resposta) => {
        this.dataSource = new MatTableDataSource(resposta);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.clientes)
      })
  }  

  CriarCliente(): void {
    this.router.navigate([`clientes/${this.id_col}/cliente/create`])
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
