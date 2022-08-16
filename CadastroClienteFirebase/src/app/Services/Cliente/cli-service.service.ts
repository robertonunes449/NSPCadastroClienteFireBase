import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente/Cliente';
import { Colaborador } from 'src/app/Models/Colaborador/Colaborador';

@Injectable({
  providedIn: 'root'
})
export class CliServiceService {

  clientes: Observable<Cliente>;


  constructor(
    private afs: AngularFirestore,
    private snackBar: MatSnackBar
  ) { }


  findAllByColaborador(id_col: string){    
    return this.afs.collection('colaborador/' + id_col + '/cliente').valueChanges()

  }
 
  
  findById(c: Cliente, id_col: String): Observable<Cliente> {
    return this.afs.collection('colaborador/' + id_col + '/cliente').doc<Cliente>(c.id).valueChanges() 
  }

  create(c: Cliente, id_col: String) {
    c.id = this.afs.createId()
    return this.afs.collection('colaborador/' + id_col + '/cliente').doc(c.id).set(c,{merge: true})
  }

  update(c: Cliente, id_col: String) {
    return this.afs.collection('colaborador/' + id_col + '/cliente').doc(c.id).update(c)
  }

  delete(c: Cliente, id_col: String) {    
    return this.afs.collection('colaborador/' + id_col + '/cliente').doc(c.id).delete()
  }

  message(s: String): void {
    this.snackBar.open(`${s}`, "ok", {
      duration:2000
    })
  }
}
