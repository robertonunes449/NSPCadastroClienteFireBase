import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Models/Usuario/Usuario';
import { AuthService } from 'src/app/Services/Usuario/auth/auth.service';
import { UserServiceService } from 'src/app/Services/Usuario/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  firebaseErrorMessage: string;
  hide = true;
  loading: boolean = false;
  
  loginForm: FormGroup = this.fb.group({
    'email':['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]]
  })
 
  
  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
      ) {



    this.loginForm = new FormGroup({
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', Validators.required)
    });

    this.firebaseErrorMessage = '';
}

  ngOnInit() {
    if (this.authService.userLoggedIn) {       // if the user's logged in, navigate them to the menu (NOTE: don't use afAuth.currentUser -- it's never null)
      this.router.navigate(['/menu']);
  }

  }

  private loginNotification(u:Usuario) {
    this.userService.message('Bem vindo ' + u.nome + '!' )
  }

  private loginNotificationError(err) {
    this.userService.message(err);

  }

  onSubmit() {
    this.loading = true;                          // show the progress indicator as we start the Firebase login process

        if (this.loginForm.invalid)
            return;

        this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
            this.loading = false;                     // no matter what, when the auth service returns, we hide the progress indicator
            if (result == null) {                               // null is success, false means there was an error
                console.log('logando...');
                this.router.navigate(['/menu']);                // when the user is logged in, navigate them to menu
            }
            else if (result.isValid == false) {
                console.log('login error', result);
                this.firebaseErrorMessage = result.message;
            }
        });
    }


}
