import { Component } from '@angular/core';

@Component({
  selector: 'control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  display = true
  x = 30

  handleHide(event: Event){
    this.display = false
  }
  handleShow(event: Event){
    this.display = true
  }

  handleToggle(event: Event){
    this.display = !this.display
  }



  color:number = 1
  setRed(event: Event){
    this.color =1
  }
  setBlue(event: Event){
    this.color =2
  }
  setYellow(event: Event){
    this.color =3
  }
  setOther(event: Event){
    this.color =4
  }
  setChangeColorVal(event: Event){
    this.color = parseInt((event.target as HTMLInputElement).value)
  }


  users = ["shreya", "momo", "koko", "bobo", "roro"]

  students = [
  { name: "shreya", email: "shreya@example.com", age: 20 },
  { name: "momo", email: "momo@example.com", age: 21 },
  { name: "koko", email: "koko@example.com", age: 22 },
  { name: "bobo", email: "bobo@example.com", age: 23 },
  { name: "roro", email: "roro@example.com", age: 24 }
]
studentName = ""
getName(name: string){
  this.studentName =name
}


}


