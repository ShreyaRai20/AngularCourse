import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-users',
  imports: [],
  templateUrl: './display-users.html',
  styleUrl: './display-users.css'
})
export class DisplayUsers {
  @Input() user: string ='';

  @Output() getUsers = new EventEmitter()

  users = ["shr","eya","rai"]
  ngOnInit(){
    this.getUsers.emit(this.users)
  }

}
