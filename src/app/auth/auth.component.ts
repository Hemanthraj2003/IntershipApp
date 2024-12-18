import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../Services/commonservice.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  ngOnInit(): void {
    let x = this._service.getLoginDetails();
    console.log(x);
    
      const data = localStorage.getItem('customers')
      console.log(data);
  }
  constructor( private router: Router, private _service: CommonserviceService){}
  email: string= '';
  password: string='';

  onSubmit(){
    console.log(this.email, this.password);
    
    if(this.email == "Admin" && this.password == "password"){
      this.router.navigate(['/home'])
      alert('Login Successful')
    } else {
      alert('Wrong credentials')
    }
  }
}
