import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { Login } from './login/login';
import { Profile } from './profile/profile';


@Component({
  selector: 'app-root',
  imports: [FormsModule, Login, Profile],
  templateUrl: './app.html', //view
  styleUrl: './app.css'
})


export class App {
  title =  'HospitalManagementSystem'
  x =2+2
  someVal: string = "";
  someVals: Array<string> = new Array<string>()
  callLogic(){
    // alert("Hello!")
    this.someVals.push(this.someVal)
    this.someVal = ""
  }
}
