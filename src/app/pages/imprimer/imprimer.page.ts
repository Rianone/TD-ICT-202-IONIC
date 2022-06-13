import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprimer',
  templateUrl: './imprimer.page.html',
  styleUrls: ['./imprimer.page.scss'],
})
export class ImprimerPage implements OnInit {
  images = [ 
     { src: "/assets/template 1.png", text:"Template 1"},
     { src: "/assets/template 2.png", text:"Template 2"},
     { src: "/assets/template 3.png", text:"Template 3"},
  ] 
  constructor() { }

  ngOnInit() {
  }
  print(template:string){
    console.log(template+"selected")
  }

}
