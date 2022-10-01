import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Produtos } from 'src/app/Models/Produtos/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private ProdutosCollection: AngularFirestoreCollection<Produtos> = this.afs.collection('produtos');

  
  constructor(
    private afs: AngularFirestore,
    private snackBar: MatSnackBar
  ) { }
  
  
  findAll(): Observable<Produtos[]> {
    return this.ProdutosCollection.valueChanges();
  }

  findById(p: Produtos): Observable<Produtos> {
    return this.ProdutosCollection.doc<Produtos>(p.id).valueChanges() 
  }

  create(p: Produtos) {
    p.id = this.afs.createId()
    return this.afs.collection('produtos').doc(p.id).set(p, {merge: true})
  }

  update(p: Produtos) {
    return this.afs.collection('produtos').doc(p.id).update(p)
  }

  delete(id: string) {    
    return this.afs.collection('produtos').doc(id).delete()
  }

  message(s: String): void {
    this.snackBar.open(`${s}`, "ok", {
      duration:2000
    })
  }
}
