import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../Services/commonservice.service';
import { Login } from '../models/LoginModel';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  record = new Login();
  private snackBar = inject(MatSnackBar);
  constructor( private router: Router, private _service: CommonserviceService){}

  ngOnInit(): void {
    console.log("Hello");
  }
  
  verify(){
    if (this.record.UserId && this.record.Password) {
      
    this._service.validateMethod(this.record.UserId, this.record.Password).subscribe({
      next: (data:any) =>{
        this.snackBar.open("Login Successfully","close", {duration: 3000});
        console.log(data);
      },
      error: (data:any) =>{
        this.snackBar.open("Login failed","close", {duration: 3000});
        console.log(data);
      }
    })}
      
  }
  
}









// const data = localStorage.getItem('customers')
      // console.log(data);

// email: string= '';
//   password: string='';

//   onSubmit(){
//     console.log(this.email, this.password);
    
//     if(this.email == "Admin" && this.password == "password"){
//       this.router.navigate(['/home'])
//       alert('Login Successful')
//     } else {
//       alert('Wrong credentials')
//     }
//   }