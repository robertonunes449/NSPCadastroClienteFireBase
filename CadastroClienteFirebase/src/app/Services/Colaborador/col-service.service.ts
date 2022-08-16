import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColServiceService {

  private ColaboradorCollection: AngularFirestoreCollection<Colaborador> = this.afs.collection('colaborador');

  
  constructor(
    private afs: AngularFirestore,
    private snackBar: MatSnackBar
  ) { }
  
  
  findAll(): Observable<Colaborador[]> {
    return this.ColaboradorCollection.valueChanges();
  }

  findById(c: Colaborador): Observable<Colaborador> {
    return this.ColaboradorCollection.doc<Colaborador>(c.id).valueChanges() 
  }

  create(c: Colaborador) {
    c.id = this.afs.createId()
    return this.afs.collection('colaborador').doc(c.id).set(c, {merge: true})
  }

  update(c: Colaborador) {
    return this.afs.collection('colaborador').doc(c.id).update(c)
  }

  delete(id: string) {    
    return this.afs.collection('colaborador').doc(id).delete()
  }

  message(s: String): void {
    this.snackBar.open(`${s}`, "ok", {
      duration:2000
    })
  }

}
