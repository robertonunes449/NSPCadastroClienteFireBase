import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Você deve inserir um valor' :
        this.email.hasError('email') ? 'Não é um e-mail válido' :
            '';
  }
  
  constructor() { }

  ngOnInit() {
  }

}
