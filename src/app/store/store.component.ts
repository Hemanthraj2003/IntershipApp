import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '../models/Store';
import { CommonserviceService } from '../Services/commonservice.service';
import { CustomerModel } from '../models/CustomerModel';

@Component({
  selector: 'app-stores',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoresComponent implements OnInit {

  record = new Store()
  stores : Store[] = [];
  dtCustomer : any[] = []
 
  _router: any;
date: any;

  constructor(private _service : CommonserviceService, private snackBar: MatSnackBar, private router: Router) { 
  }
  ngOnInit(): void {
    this._service.getStore().subscribe((data: any) => {
      console.log(data);
      this.stores = data;
  },
  (err: any) => {
    console.log("Error occurred", err);
    this.snackBar.open('An error occurred', 'Close', { duration: 3000 });
  });

  this._service.GetCustomers().subscribe((data:any)=>{
    this.dtCustomer = data;
    console.log(this.dtCustomer);
    
    
  })
  } 

  submit() {
    this._service.postStore(this.record).subscribe({
      next: (data: any) => {
        console.log(data);
        this.snackBar.open('Store record added', 'Close', { duration: 3000 });
        this.stores.push(this.record);
        // this.router.navigate(['/storereport']);
      },
      error: (err: any) => {
        console.log("Error occurred", err);
        this.snackBar.open('An error occurred', 'Close', { duration: 3000 });
      }
    });
  }
  refreshStoreReport() {
    throw new Error('Method not implemented.');
  }
}