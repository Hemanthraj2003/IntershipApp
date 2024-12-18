import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  

  title2:string= "Sign In";
  title1:string = 'Sign Up';
  isSignUp:boolean = false;
ngOnInit(): void {
    
}

signUp(){
  console.log(this.signUpModel);
  
}
signIn(){
  console.log(this.signInModel)
}

  signUpModel = {
    userId: '',
    password: '',
    repassword: ''
  }
  signInModel = {
    userId: '',
    password: ''
  }
  
}
