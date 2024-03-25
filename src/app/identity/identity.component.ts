import { Component, OnInit } from '@angular/core';
import { IdentityService } from './identity.service';



@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css'],


})
export class IdentityComponent {
  users: any[] = [];
  newUser: any = {};

  constructor(private identityService: IdentityService) {
    this.getUsers();
   }
   getUsers() {
    this.identityService.getAllUsers()
      .subscribe((data) => {
        this.users = data;
      });
    }
    createUser() {
      this.identityService.createUser(this.newUser)
        .subscribe((data) => {
          this.getUsers();
          this.newUser = {};
        });
    }
}
