import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})
export class InformationsPage implements OnInit {
  names: string = ""
  surnames: string = ""
  date: string = ""
  birth: string = ""
  contact: string = ""
  email: string = ""
  compte: string = ""
  constructor() { }

  ngOnInit() {
  }

}
