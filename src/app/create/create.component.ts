import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  router: any;

  constructor( private route : Router) {
      this.router = route
   }

  ngOnInit() {}

  clicked(){
    console.log("clicked")
    this.router.navigate(["informations"])
  }

}
