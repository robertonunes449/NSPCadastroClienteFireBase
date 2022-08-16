import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { CliServiceService } from 'src/app/Services/Cliente/cli-service.service';
import { ColServiceService } from 'src/app/Services/Colaborador/col-service.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.scss']
})
export class ClienteReadComponent implements OnInit {

  displayedColumns: string[] = ["nome"];

  dataSource: Colaborador [] = []; 

  constructor(
    private colService: ColServiceService,
    private cliService: CliServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.colService.findAll()
    .subscribe((col) => this.dataSource = col)
    this.findAll();
  }

  findAll() {
    this.colService.findAll()    
    .subscribe(resposta => {
      console.log(resposta);
      this.dataSource = resposta;
    })
  }

}
