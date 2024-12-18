import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent {
  constructor(private router: Router){}
  Navigate(){
    this.router.navigate(['/signIn']);
  }
}
