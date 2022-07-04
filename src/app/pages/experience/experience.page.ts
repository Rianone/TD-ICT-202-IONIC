import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {
  title:string = ""
  company:string = ""
  period:string = ""
  details:string = ""
  country:string = ""
  constructor() { }

  ngOnInit() {
  }

}
