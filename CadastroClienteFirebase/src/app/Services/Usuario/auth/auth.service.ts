import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: boolean;      // other components can check on this variable for the login status of the user

  constructor(private router: Router,
     private afAuth: AngularFireAuth,
      private afs: AngularFirestore) {
      this.userLoggedIn = false;

      this.afAuth.auth.onAuthStateChanged((user) => {              // set up a subscription to always know the login status of the user
          if (user) {
              this.userLoggedIn = true;
          } else {
              this.userLoggedIn = false;
          }
      });
  }

  loginUser(email: string, password: string): Promise<any> {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
          .then(() => {
              console.log('Auth Service: loginUser: success');
              // this.router.navigate(['/dashboard']);
          })
          .catch(error => {
              console.log('Auth Service: login error...');
              console.log('error code', error.code);
              console.log('error', error);
              if (error.code)
                  return { isValid: false, message: error.message };
          });
  }

 criarUser(user: any): Promise<any> {
      return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
          .then((result) => {
              let emailLower = user.email.toLowerCase();

              this.afs.doc('/usuario/' + emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
                  .set({
                      accountType: 'endUser',
                      displayName: user.displayName,
                      displayName_lower: user.displayName.toLowerCase(),
                      email: user.email,
                      email_lower: emailLower
                  });

                  result.user.sendEmailVerification();                    // immediately send the user a verification email
          })
          .catch(error => {
              console.log('Auth Service: erro ao criar user', error);
              if (error.code)
                  return { isValid: false, message: error.message };
          });
  }

  resetPassword(email: string): Promise<any> {
      return this.afAuth.auth.sendPasswordResetEmail(email)
          .then(() => {
              console.log('Auth Service: redefini????o de senha feita com sucesso');
              // this.router.navigate(['']);
          })
          .catch(error => {
              console.log('Auth Service:erro de redefini????o de senha ...');
              console.log(error.code);
              console.log(error)
              if (error.code)
                  return error;
          });
  }

  async resendVerificationEmail() {                         // verification email is sent in the Sign Up function, but if you need to resend, call this function
      return (await this.afAuth.auth.currentUser).sendEmailVerification()
          .then(() => {
              // this.router.navigate(['']);
          })
          .catch(error => {
              console.log('Auth Service:erro ao enviar Email de verifica????o...');
              console.log('error code', error.code);
              console.log('error', error);
              if (error.code)
                  return error;
          });
  }

  logoutUser(): Promise<void> {
      return this.afAuth.auth.signOut()
          .then(() => {
              this.router.navigate(['']);                    // when we log the user out, navigate them to home
          })
          .catch(error => {
              console.log('Auth Service: Erro logout ...');
              console.log('error code', error.code);
              console.log('error', error);
              if (error.code)
                  return error;
          });
  }

  setUserInfo(payload: object) {
      console.log('Auth Service: salvando informa????o de usu??rio...');
      this.afs.collection('usuario')
          .add(payload).then(function (res) {
              console.log("Auth Service:resposta em obter informa????es do usu??rio ...")
              console.log(res);
          })
  }

  getCurrentUser() {
      return this.afAuth.auth.currentUser;                                 // returns user object for logged-in users, otherwise returns null 
  }
}