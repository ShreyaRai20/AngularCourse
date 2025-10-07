import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  @Input() count:number = 0;
  name ='shreya'
  constructor(){
    console.log('constructor') 
    this.name="momo"
  }

  ngOnInit(){
    console.log('ngOnInit')
    this.name="koko"
  }

  ngOnDestroy(){
    console.log('destroy')
  }

  ngOnChanges(){
    console.log('ngOnChanges')
  }
}
