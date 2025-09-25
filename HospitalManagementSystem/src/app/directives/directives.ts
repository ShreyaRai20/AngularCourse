import { CommonModule, NgFor, NgIf, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';

// component directive which tells everything that component uses
@Component({
  selector: 'directives',
  imports: [NgIf, NgFor, NgSwitch, CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  show=false

  login=false

  arr = [1,2,3,4,5]
  block = 0

  updateBlock(){
    if(this.block === 3) {
      this.block=1
      return
    }
    this.block += 1
  }


usersData = [
  {
    name: 'shreya',
    age: 23,
    email: 'shr@gmail.com',
    skills: ['Angular', 'TypeScript', 'CSS']
  },
  {
    name: 'rahul',
    age: 28,
    email: 'rahul28@gmail.com',
    skills: ['React', 'Node.js', 'MongoDB']
  },
  {
    name: 'aisha',
    age: 25,
    email: 'aisha25@yahoo.com',
    skills: ['Python', 'Django', 'PostgreSQL']
  },
  {
    name: 'michael',
    age: 32,
    email: 'michael32@outlook.com',
    skills: ['Java', 'Spring Boot', 'AWS']
  },
  {
    name: 'sophia',
    age: 29,
    email: 'sophia29@gmail.com',
    skills: ['Data Analysis', 'R', 'Tableau']
  }
];

color=''

updateColor(c:string){
  this.color=c
}


}
