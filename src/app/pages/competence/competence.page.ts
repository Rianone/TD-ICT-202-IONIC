import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.page.html',
  styleUrls: ['./competence.page.scss'],
})
export class CompetencePage implements OnInit {

  name:string = ""
  level:string = ""
  category:string = ""
  begin:string = ""
  end:string = ""
  constructor() { }

  ngOnInit() {
  }

}
