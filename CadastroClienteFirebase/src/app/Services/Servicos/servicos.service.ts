import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Servicos } from 'src/app/Models/Servicos/Servicos';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private ServicosCollection: AngularFirestoreCollection<Servicos> = this.afs.collection('servicos');

  constructor(
    private afs: AngularFirestore,
    private snackBar: MatSnackBar
  ) { }

  findAll(): Observable<Servicos[]> {
    return this.ServicosCollection.valueChanges();
  }

  findById(s: Servicos): Observable<Servicos> {
    return this.ServicosCollection.doc<Servicos>(s.id).valueChanges() 
  }

  create(s: Servicos) {
    s.id = this.afs.createId()
    return this.afs.collection('servicos').doc(s.id).set(s, {merge: true})
  }

  update(s: Servicos) {
    return this.afs.collection('servicos').doc(s.id).update(s)
  }

  delete(id: string) {    
    return this.afs.collection('servicos').doc(id).delete()
  }

  message(m: String): void {
    this.snackBar.open(`${m}`, "ok", {
      duration:2000
    })
  }
}
