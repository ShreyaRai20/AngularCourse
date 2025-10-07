import { Component } from '@angular/core';
import { DisplayUsers } from '../display-users/display-users';

@Component({
  selector: 'app-display-users-parent',
  imports: [DisplayUsers],
  templateUrl: './display-users-parent.html',
  styleUrl: './display-users-parent.css'
})
export class DisplayUsersParent {
  user = "momo"

  usersFromChild:string[] | undefined;

  handleUsers(users: string[]){
    this.usersFromChild = users;
    console.log(this.usersFromChild)
  }
}
