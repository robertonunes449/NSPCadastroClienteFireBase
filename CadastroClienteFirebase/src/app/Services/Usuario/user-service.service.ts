import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from, Observable, of, throwError } from 'rxjs';
import { Usuario } from 'src/app/Models/Usuario/Usuario';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { MatSnackBar } from '@angular/material';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userCollection: AngularFirestoreCollection<Usuario> = this.afs.collection('usuario');

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  findAll(): Observable<Usuario[]> {
    return this.userCollection.valueChanges();
  }

  
  findById(user: Usuario): Observable<Usuario> {
    return this.userCollection.doc<Usuario>(user.id).valueChanges() 
  }


  register(user: Usuario): Observable<boolean> {
    return from(this.afAuth.auth
      .createUserWithEmailAndPassword(user.email, user.password))
      .pipe(
        switchMap((u: firebase.auth.UserCredential) => 
          this.afs.collection('usuario').doc(u.user.uid).set({...user, id: u.user.uid})
          .then(()=> true)
          
        ),
        catchError((err) => throwError(err))
      )
  }
  
  getUser(): Observable<Usuario> {
    return this.afAuth.authState
      .pipe(
        switchMap(u => (u) ?
          this.userCollection.doc<Usuario>(u.uid).valueChanges() : of(null))
      )
  }

  authenticated(): Observable<boolean> {
    return this.afAuth.authState
      .pipe(
        map(u => (u) ? true : false))
  }

  async upadateUserDate(u: auth.UserCredential) {
    try {
      const newUser: Usuario = {
        nome: '',
        email: u.user.email,
        password: '',
        id: u.user.uid
      };
      await this.userCollection.doc(u.user.uid).set(newUser);
    }
    catch(e) {
      throw new Error(e);
    }
  }
   

  message(s: String): void {
    this.snackBar.open(`${s}`, "ok", {
      duration:2000
    })
  }
}
