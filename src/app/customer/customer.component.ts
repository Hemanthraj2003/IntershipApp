import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../Services/commonservice.service';
import { CustomerModel } from '../models/CustomerModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  constructor(private _service: CommonserviceService){}
  record = new CustomerModel();
  tableData : CustomerModel[] = []
  displayedColumns:string[] = ['Code', 'Name']
  ngOnInit(): void {
      this._service.GetCustomers().subscribe({
        next: (data: any) => {
          console.log(data);
          
          this.tableData = data;          
        },
        error: (err: any) => {
          console.log(err);
          
        }
      })
  }

  saveCustomers(){
    this._service.PostCustomer(this.record).subscribe({
      next: (data:any) =>{
        console.log(data);
        
      },
      error: (err: any) => {
        console.log(err); 
      }
    })
  }



  }

