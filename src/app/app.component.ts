import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Informations personelles', url: 'informations', icon: 'person-circle' },
    { title: 'Education', url: 'education', icon: 'school' },
    { title: 'Experience Professionelle', url: 'experience', icon: 'library' },
    { title: 'Competences', url: 'competence', icon: 'newspaper' },
    { title: 'Langues', url: 'langues', icon: 'text' },
    { title: 'Loisirs', url: 'loisirs', icon: 'heart' },
    { title: 'Imprimer', url: 'imprimer', icon: 'print' },
    { title: 'Parametres', url: 'parametre', icon: 'ellipsis-vertical' },
  ];
 
  constructor() {}
}
