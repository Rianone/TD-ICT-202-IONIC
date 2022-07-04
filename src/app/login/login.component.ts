import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from '../services/auth.service';
import { UserService } from '../services/user-service.service';
import { User } from '../types/user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  router: any;
  email:string | null = "smrianone@gmail.com";
  password:string | null='123456';
  error:string = '';
  username:string = ''
  
  constructor(
    private route : Router, 
    public angularFire: AngularFireAuth,
    private authService: FirebaseAuthService,
    private alertController: AlertController
  ) {
    this.router = route
  }

  ngOnInit() {
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({ 
      // header: 'Welcome '+this.username[1]+' 🥳!!!',
      header: 'Welcome 🥳!!!',
      buttons: ['OK']
    });

    await alert.present();
  }

  signin() {
    
    
    if(this.password != null && this.email != null){
      if(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(this.email)){
        this.error = ''
        
        if(this.password.length>=6){
          this.error = ''
          
          this.authService.signInWithEmail(this.email, this.password)
          .then(() => {
            // navigate to user profile
            this.setGlobalUid()
            this.presentAlert()
            this.redirectToprofile();
            // this.username=''
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
    else{
      this.error = 'One or more fields are empty !!!'
    }
  }

  redirectToprofile(){
    this.router.navigate(["informations"])
  }

  setGlobalUid(){
      environment.globalUid = '1234'
  }

}
