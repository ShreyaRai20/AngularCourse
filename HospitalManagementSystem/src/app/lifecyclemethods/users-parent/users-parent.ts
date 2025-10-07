import { afterEveryRender, afterNextRender, Component, ViewChild } from '@angular/core';
import { Users } from '../users/users';

@Component({
  selector: 'app-users-parent',
  imports: [Users],
  templateUrl: './users-parent.html',
  styleUrl: './users-parent.css'
})
export class UsersParent {
  @ViewChild('user') Users: any;

  constructor(){
    afterNextRender(()=>{
      console.log('afterNextRender')
    })
    afterEveryRender(()=>{
      console.log('afterEveryRender')
    })
  }

  display=true
  count = 0;
  handleClick(){
    this.display = !this.display
  }
  handleCounter(){
    this.count = this.count + 1
  }
}
