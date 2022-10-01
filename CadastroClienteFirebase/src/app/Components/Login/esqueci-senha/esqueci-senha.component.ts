import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Usuario/auth/auth.service';


@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss']
})
export class EsqueciSenhaComponent implements OnInit {

  mailSent: boolean;
  loading: boolean;
  forgotForm: FormGroup;
  firebaseErrorMessage: string;

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth, private fb: FormBuilder) {
    this.mailSent = false;
    this.loading = false;

    this.forgotForm = new FormGroup({
        'email': new FormControl('', [Validators.required, Validators.email])
    });

    this.firebaseErrorMessage = '';

}

  ngOnInit() {
      this.afAuth.authState.subscribe(user => {               // if the user is logged in, update the form value with their email address
        if (user) {
            this.forgotForm.patchValue({
                email: user.email
            });
        }
    });

  }

   retrievePassword() {
        this.loading = true;                          // show the progress indicator as we start the Firebase password reset process

        if (this.forgotForm.invalid)
            return;

        this.authService.resetPassword(this.forgotForm.value.email).then((result) => {
            this.loading = false;                     // no matter what, when the auth service returns, we hide the progress indicator
            if (result == null) {                               // null is success, false means there was an error
                console.log('email de redefinição de senha enviado...');
                this.mailSent = true;
                // this.router.navigate(['/menu']);        // when the user is logged in, navigate them to dashboard
            }
            else if (result.isValid == false) {
                console.log('login error', result);
                this.firebaseErrorMessage = result.message;
            }
        });
    }

  

}
