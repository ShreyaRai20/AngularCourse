import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { EventListener } from './event-listener/event-listener';
import { ControlFlow } from './control-flow/control-flow';
import { Signal } from './signal/signal';
import { Todolist } from './todolist/todolist';
import { Directives } from './directives/directives';
import { Header } from './header/header';
import { ReactiveForm } from './reactive-form/reactive-form';
import { PC } from './p-c/p-c';
import { CurrencyConverterPipe } from './pipe/currency-converter-pipe';
import { DisplayUsersParent } from './display-users-parent/display-users-parent';
import { UsersParent } from './lifecyclemethods/users-parent/users-parent';


@Component({
  selector: 'app-root',
  imports: [FormsModule, Login, Profile, EventListener, ControlFlow, Signal, Todolist, Directives, RouterOutlet, Header, ReactiveForm, PC, CurrencyConverterPipe, DisplayUsersParent, UsersParent ],
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

  user='bruce'

  onChangeUser(user:string){
    this.user=user
  }

  users : string[] | undefined;

  handleUsers(users:string[]){
    this.users = users;
  }

  amount = 10;
}
