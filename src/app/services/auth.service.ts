import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class FirebaseAuthService {
  auth:any;
  username:string ;

  constructor(public angularFire: AngularFireAuth) {
    this.auth = angularFire;
  }
  
  signInWithEmail(email: string, password: string): any {
    return this.angularFire.signInWithEmailAndPassword(email, password);
  }
  
  signUpWithEmail(email: string, password: string): any {
    return this.angularFire.createUserWithEmailAndPassword(email, password);
  }

  setUsername(username:string){
     this.username = username;
  }

  getUsername(){
    return this.username;
 }
  
  // signInWithGoogle() {
  //   const provider = new auth.GoogleAuthProvider();
  //   const scopes = ['profile', 'email'];
  //   return this.socialSignIn(provider.providerId, scopes);
  // }

  // socialSignIn(providerName: string, scopes?: Array<string>): Promise<any> {
  //   const provider = new auth.OAuthProvider(providerName);
  
  //   // add any permission scope you need
  //   if (scopes) {
  //     scopes.forEach(scope => {
  //       provider.addScope(scope);
  //     });
  //   }
  
  //   if (this.platform.is('desktop')) {
  //     return this.angularFire.signInWithPopup(provider);
  //   } else {
  //     // web but not desktop, for example mobile PWA
  //     return this.angularFire.signInWithRedirect(provider);
  //   }
  // }
}