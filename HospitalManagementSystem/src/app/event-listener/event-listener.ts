import { Component } from '@angular/core';

@Component({
  selector: 'event-listener',
  imports: [],
  templateUrl: './event-listener.html',
  styleUrl: './event-listener.css'
})
export class EventListener {
  handleClick(event:any){
    console.log("clicked", event.type)
    console.log("clicked", event.target.value)
    console.log("clicked", event.target.className)
    console.log("clicked", event.target.id)
  }

  handleClick01(event:MouseEvent){
    console.log("clicked", event.type)
  }



  nameVal = ""
  displayName = ""

  getVal(event:Event){
    const name = (event.target as HTMLInputElement).value
    this.nameVal = name

    console.log("name: ", this.nameVal)
  }

  getName(event:Event){

    this.displayName = this.nameVal

    console.log("name: ", this.nameVal)
  }

  setName(event:Event){
    
    this.nameVal = "momo"

    console.log("name: ", this.nameVal)
  }

  email = ""
  getEmail(val: string){
    this.email = val
  }

  setEmail(val: string){
    
    this.email = ""
  }
}
