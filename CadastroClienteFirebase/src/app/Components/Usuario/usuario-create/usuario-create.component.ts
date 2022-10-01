import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';
import { Usuario } from 'src/app/Models/Usuario/Usuario';
import { ColServiceService } from 'src/app/Services/Colaborador/col-service.service';
import { UserServiceService } from 'src/app/Services/Usuario/user-service.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.scss']
})
export class UsuarioCreateComponent implements OnInit {

  hide = true;
  

  formRegister: FormGroup = this.fb.group({
    'nome': ['', [Validators.required]],
    'email': ['', [Validators.required]],
    'password1': ['',[Validators.required, Validators.minLength(6)]],
    'password2': ['',[Validators.required, Validators.minLength(6)]],
  })


  colaboradores: Colaborador[] = [];
 
  constructor(
    private colService: ColServiceService,
    private fb: FormBuilder,
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.colService.findAll().subscribe((col) => {this.colaboradores = col});
  }

  matchingPassword(group: FormGroup) {
    if (group) {
      const password1 = group.controls['password1'].value;
      const password2 = group.controls['password2'].value;
      if (password1 == password2) {
        return null;
      }
    }
    return {matching: false};
} 

  onSubmit() {
    const newUser: Usuario = {
      nome: this.formRegister.value.nome,
      email: this.formRegister.value.email,
      password:this.formRegister.value.password1
    }
    this.userService.register(newUser)
    .subscribe(
      (u) => {
        this.userService.message('Usuario Criado com Sucesso!!!')
        this.router.navigateByUrl('usuarios')
      },
      (err) => {
        console.log(err)
        this.userService.message('Erro ao Criar Usuario')
      })
  }

  cancel() {
    this.router.navigate(['usuarios']);
  }

  

}
