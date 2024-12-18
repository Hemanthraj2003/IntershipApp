import { Component, OnInit } from '@angular/core';
import { customer } from '../models/customer';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})


export class DropdownComponent implements OnInit {
  
  fromDate!: Date;
  selectedValue:any;
  record= new customer();
  cities :any;
  ngOnInit(): void {
      const data = localStorage.getItem('cities')
      this.cities = JSON.parse(data!)
      console.log(this.cities);
  }

  printDate(){
    console.log(this.fromDate); 
  }

  
  submitDetails(){
    let customerList = localStorage.getItem('cities')
    let list : any[] =  customerList ? JSON.parse(customerList) : []
    list.push(this.record)
    console.log(list);
    
    localStorage.setItem('cities', JSON.stringify(list))
    
  }

  calculateTotal(){
    this.record.Total = this.record.Quantity! * this.record.Rate!
  }
}
