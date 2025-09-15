import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {
  count = signal(10)
  x= 10
  data: WritableSignal<number| string> = signal(10)
  // data01: Signal<number> = computed(()=>200)

  constructor(){
    effect(()=>{
      console.log( "x: ",this.x)
      console.log("count: ",this.count())
    })
  }
  increaseX(){
    this.x = this.x + 1 
    this.count.set(this.count()+1)
  }

  updateData(){
    this.data.set("hello")
  }

  a=signal(10)
  b=signal(20)
  c=computed(()=>this.a()+this.b())


  showValue(){
    console.log(this.c())
    this.a.set(20)
    console.log(this.c())
  }
}
