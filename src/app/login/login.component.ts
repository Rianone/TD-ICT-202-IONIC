import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user-service.service';
import { User } from '../types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users: Observable<User[]>
  
  constructor(private userData: UserService) {
     this.users = this.userData.getUsers()
     console.log(this.users)
  }

  ngOnInit() {
    
  }

}
