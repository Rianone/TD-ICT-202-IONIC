import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.page.html',
  styleUrls: ['./realisation.page.scss'],
})
export class RealisationPage implements OnInit {
  desc:string = ""
  category:string = ""
  constructor() { }

  ngOnInit() {
  }

}
