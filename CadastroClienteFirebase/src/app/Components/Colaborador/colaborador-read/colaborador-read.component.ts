import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ColServiceService } from 'src/app/Services/Colaborador/col-service.service';

@Component({
  selector: 'app-colaborador-read',
  templateUrl: './colaborador-read.component.html',
  styleUrls: ['./colaborador-read.component.scss']
})
export class ColaboradorReadComponent implements OnInit {

  displayedColumns: string[] = ['icon', 'ID', 'nome', 'funcao', 'nascimento', 'celular', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  colaboradoresForm: FormGroup;

  constructor(
    private router: Router,
    private colService: ColServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this. getAllColaborador()
  }

  getAllColaborador() {
    this.colService.findAll()
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

  addColaborador(){
    this.router.navigate(["colaboradores/add"]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
