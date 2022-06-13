import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage implements OnInit {
  public appPages = [
    { title: 'Informations personelles', url: 'informations', icon: 'person-circle' },
    { title: 'Education', url: 'education', icon: 'school' },
    { title: 'Experience Professionelle', url: 'experience', icon: 'library' },
    { title: 'Competences', url: 'competences', icon: 'newspaper' },
    { title: 'Langues', url: 'langues', icon: 'text' },
    { title: 'Loisirs', url: 'loisirs', icon: 'heart' },
    { title: 'Imprimer', url: 'imprimer', icon: 'print' },
    { title: 'Parametres', url: 'parametres', icon: 'ellipsis-vertical' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
