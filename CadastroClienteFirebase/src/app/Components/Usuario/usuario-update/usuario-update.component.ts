import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Models/Usuario/Usuario';
import { ColServiceService } from 'src/app/Services/Colaborador/col-service.service';
import { UserServiceService } from 'src/app/Services/Usuario/user-service.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.scss']
})
export class UsuarioUpdateComponent implements OnInit {

  
  hide = true;
  

  passwords: Usuario = {
    nome: '',
    email: '',
    password: ''
  }

  formRegister: FormGroup = this.fb.group({
    'nome': ['', [Validators.required]],
    'email': ['', [Validators.required]],
    'password1': ['',[Validators.required, Validators.minLength(6)]],
    'password2': ['',[Validators.required, Validators.minLength(6)]],
  })



  constructor(
   private router: Router,
   private colService: ColServiceService,
   private fb: FormBuilder,
   private userService: UserServiceService,
   private route: ActivatedRoute,
   
  ) { }

  ngOnInit() {
    this.passwords.id = this.route.snapshot.paramMap.get('id')!    
    this.findById()
  }



  findById(): void {
    this.userService.findById(this.passwords)
    .subscribe((resposta) => {
      this.passwords.nome = resposta.nome
      this.passwords.email = resposta.email
      this.passwords.password = resposta.password
      console.log(resposta)
    })
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
      this.userService.message('Senha Redefinida com Sucesso!!!')
      this.router.navigateByUrl('login')
    },
    (err) => {
      console.log(err)
      this.userService.message('Erro ao Criar Usuario')
    })
}
  
  cancel() {
    this.router.navigate(['login']);
  }

}
