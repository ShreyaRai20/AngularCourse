import { Component } from "@angular/core";

@Component({
    selector: "profile",
    // template:"<h1>Profile</h1>",
    templateUrl: "./profile.html",
    // styles: "h1{color:red}"
    styleUrl: "./profile.css"

})

export class Profile {

    count: number = 0

    handleClick() {
        alert("hey!!!")
        this.otherfucntion() // use this in class methodss!!!!
    }

    otherfucntion() {
        console.log("hey!!!")
    }

    increment(){
        this.count = this.count + 1
    }

    decrement(){
        this.count = this.count - 1
    }

    reset(){
        this.count = 0
    }

    handleCounter(val:string){
        if(val === "increment"){
            this.count = this.count + 1
        }
        else if(val === "decrement" && this.count <= 0){
            this.count = this.count - 1
        }
        else if(val === "reset"){
            this.count = 0
        }
    }
}