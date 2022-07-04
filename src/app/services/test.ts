import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs'; 
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'; 
import {collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"; 

type items = { 
    id:string,
    text: string 
} 

