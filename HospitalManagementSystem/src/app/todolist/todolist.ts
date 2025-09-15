import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todolist',
  imports: [FormsModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist {
  task=""
  taskList: {id:number,taskName: string}[]=[]

  addTask(){
    this.taskList.push({id:Math.random(),taskName:this.task})
    this.task=""
    console.log(this.taskList)
  }

  deleteTask(taskId: number){
    this.taskList = this.taskList.filter((el)=>el.id !== taskId)
    console.log(this.taskList)
  }
}
