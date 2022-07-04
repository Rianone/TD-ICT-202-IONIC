import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from '@angular/router'
import { AlertController } from '@ionic/angular';
import { FirebaseAuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  router: any;
  email:string | null = "smrianone2@gmail.com";
  password:string | null='123456';
  error:string = '';
  nameMatch:string[] =[]
  name:string = ''
  

  constructor( 
    private route : Router, 
    public angularFire: AngularFireAuth,
    private authService: FirebaseAuthService,
    private firebaseService: FirebaseService,
    private alertController: AlertController) {

          this.router = route
   }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({ 
      header: 'Message',
      message: 'Account created with success 🙂!!!',
      buttons: ['OK']
    });

    await alert.present();
  }

  signup(){
    if(this.password != null && this.email != null){
      if(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(this.email)){
        this.error = ''
         if(this.password.length>=6){
            this.error = ''

             this.authService.signUpWithEmail(this.email, this.password)
             .then(user => {
               // navigate to user profile
               
               this.presentAlert()
               this.redirectToprofile()
               
             })
             .catch(error => {
               this.error = error.message;
             });
           

         }
         else{
           this.error = 'Password must be atleast 5 character long !!!'
         }
      }
      else{
        this.error = 'Incorrect email address !!!'
      }
    }
    this.error = 'One or more fields are empty !!!'
  }

  redirectToprofile(){
    this.router.navigate(["login"])
  }
  setUserInfo(){
    this.nameMatch = this.email.match(/^([^@]*)@/);
    this.name = this.nameMatch ? this.nameMatch[1] : null;
    this.firebaseService.create_record({
      email:this.email,
      password:this.password,
      nom:this.name,
      photo:'none',
      contact:'none',
      theme:'default',
    }, 'users').
    catch(error => {
        console.log(error);
   });
  }

}
