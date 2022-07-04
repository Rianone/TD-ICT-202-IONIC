import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ILangage } from 'src/app/types/model';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.page.html',
  styleUrls: ['./langues.page.scss'],
})
export class LanguesPage implements OnInit {
  name:string = ""
  level:string = ""
  error:string = ''
  languageList:ILangage[] = [];
  constructor(private firebaseService: FirebaseService,) { }

  ngOnInit() {
    this.firebaseService.read_records('langage').subscribe(data => {

      this.languageList = data.map(e => {
        return {
          id: e.payload.doc.id,
          nom: e.payload.doc.data()['nom'],
          niveau: e.payload.doc.data()['niveau'],
          userid: e.payload.doc.data()['userid'],
        };
      })
      // console.log(this.languageList);

    });
  }
  
  addLanguage(){
    if(this.name!='' && this.level!=''){
      this.error = ''
      if(/^[A-Za-z]+$/.test(this.name)){
        this.error = ''
        if(Number(this.level)){
          this.error = ''
          if(Number(this.level)>100 || Number(this.level)<0){
            this.error = 'Invalid value range must be in range (1-100)'
          }
          else{

            this.error = ''
            this.firebaseService.create_record({
            id: this.firebaseService.generateID(),
            nom: this.name,
            niveau: Number(this.level),
            userid: '1234',
          }, 'langage')
          .then(()=>{
              this.level = ''
              this.name = ''
          })
          .
          catch(error => {
              console.log(error);
         });
         
          }
        }
        else{
          this.error = 'Enter a valid level number !'
        }
      }
      else{
        this.error = 'Invalid name !!!'
      }
    }
    else{
      this.error = 'Empty fields !!!'
    }
  }

  deleteLanguage(rowID:string){
    this.firebaseService.delete_record(rowID, 'langage');
  }

  

}
