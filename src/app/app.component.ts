import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  public appPages = []
  router: any;
  username:string;

 
  constructor(private route : Router, private authService: FirebaseAuthService,) {
    this.router = route
    this.username = authService.getUsername() 
    // if(this.router.value == 'informations'){
        this.appPages = [
          { title: 'Personal informations', url: 'informations', icon: 'person-circle' },
          { title: 'Education', url: 'education', icon: 'school' },
          { title: 'Professional experience', url: 'experience', icon: 'library' },
          { title: 'Competences', url: 'competence', icon: 'newspaper' },
          { title: 'Certifications', url: 'certification', icon: 'medal' },
          { title: 'Work outs', url: 'realisation', icon: 'hammer' },
          { title: 'Language', url: 'langues', icon: 'text' },
          { title: 'Hobbies', url: 'loisirs', icon: 'heart' },
          { title: 'Print', url: 'imprimer', icon: 'print' },
          { title: 'Settings', url: 'parametre', icon: 'ellipsis-vertical' },
        ]
    // }
  }

}
