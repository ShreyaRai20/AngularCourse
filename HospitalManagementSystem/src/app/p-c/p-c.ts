import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-p-c',
  imports: [],
  templateUrl: './p-c.html',
  styleUrl: './p-c.css'
})
export class PC {
  //decorator 
  @Input()user:string ='';
  @Input()city:string ='';

  @Output() getUsers = new EventEmitter();
  users = ['sh','re','ya','rai']

  // ngOnInit(){
  //   this.getUsers.emit(this.users);
  // }

  printUsers(){
    this.getUsers.emit(this.users)
  }
}


