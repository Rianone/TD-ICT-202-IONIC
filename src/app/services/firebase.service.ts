import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_record(record:any , collectionName:string) {
    return this.firestore.collection(collectionName).add(record);
  }

  read_records(collectionName:string) {
    return this.firestore.collection(collectionName).snapshotChanges();
  }

  update_record(recordID, record, collectionName:string) {
    this.firestore.doc(collectionName + '/' + recordID).update(record);
  }

  delete_record(record_id, collectionName:string) {
    this.firestore.doc(collectionName + '/' + record_id).delete();
  }
  generateID(){
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    length = 10
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
  }
}