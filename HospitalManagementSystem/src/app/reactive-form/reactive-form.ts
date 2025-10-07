import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {
  username=new FormControl()
  password=new FormControl()

  displayVal(){
    console.log(this.username.value, this.password.value)
  }
  setVal(){
    this.username.setValue('shreya')
    this.password.setValue('12345')
  }

  profileForm = new FormGroup({
    grpUsername: new FormControl('',[Validators.required]),
    grpPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    grpEmail: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(50),Validators.email ]),
  });

  name(){
    return this.profileForm.get('grpUsername')
  }
  passwrd(){
    return this.profileForm.get('grpPassword')
  }
  email(){
    return this.profileForm.get('grpEmail')
  }

  onSubmit(){
    console.log(' on submit called')
    console.log(this.profileForm.value)
  }

  setVal01(){
    this.profileForm.setValue({
      grpUsername:'shr01',
      grpPassword:'123456',
      grpEmail:'shr123@gmail.com'
    })
  }
  // ++++++++++++++++++++++ Template driven ++++++++++++++++++++++

  //  user01 : FormGroup | null = new FormGroup({
  //   username01: new FormControl('',[Validators.required]),
  //   password01: new FormControl('', [Validators.required, Validators.minLength(6)]),
  //   gender01: new FormControl('', [Validators.required]),
    
  // });

  userDeets : any;

  addDetails(val: NgForm) {
  this.userDeets = val.value;
  console.log(val);
}


}
