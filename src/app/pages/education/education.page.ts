import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage implements OnInit {
  diplome:string = ""
  school:string = ""
  period:string = ""
  category:string = ""
  constructor() { }

  ngOnInit() {
  }

}
