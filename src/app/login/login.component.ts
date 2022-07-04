import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from '../services/auth.service';
import { UserService } from '../services/user-service.service';
import { User } from '../types/user';

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
  username:string[] = this.email.match(/(rianone)@gmail.com/);
  
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
          .then(user => {
            // navigate to user profile
            this.presentAlert()
            this.redirectToprofile();
            this.authService.setUsername(this.username[1])
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
    console.log("clicked")
    this.router.navigate(["informations"])
  }

}
