import { Component, OnInit } from '@angular/core';
import { Store } from '../models/Store';
// import { CommonserviceService } from '../services/commonservice.service';
import { CommonserviceService } from '../Services/commonservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-storereport',
  templateUrl: './storereport.component.html',
  styleUrls: ['./storereport.component.css']
})
export class StorereportComponent implements OnInit{

   stores : Store[] = [];
  record: any;

  ngOnInit(): void {
    this.getStore();
    this.record = new Store();
  }
constructor(private _service: CommonserviceService, private snackBar: MatSnackBar, private router: Router) { }
  //need to get the data from service
  getStore() {
    // this._service.getStore().subscribe({
    //   next: (data: any) => {
    //     this.stores = data;
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //     this.snackBar.open('An error occured', 'Close', {duration : 3000});
    //   }
    // })
  }

  Delete()
  {
    // this._service.deleteStore(this.record.id).subscribe({
    //   next: (data:any) => {
    //     console.log(data);
    //     this.snackBar.open('Store Deleted', 'Close', {duration : 3000});
    //     this.refreshStoreReport();
    //     },
    //   error: (err:any) => {
    //     this.snackBar.open('An error occured', 'Close', {duration : 3000});
    //     console.log("err occured");
        
    //   }
    // })
  }

  refreshStoreReport() {
    this.router.navigate(["/storereport"]);
  }
}