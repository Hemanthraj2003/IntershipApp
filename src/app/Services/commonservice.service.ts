import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from '../models/customer';
import { CustomerModel } from '../models/CustomerModel';
import { Store } from '../models/Store';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  constructor(private http: HttpClient){}
  private url: string = "https://localhost:44361/api/"
  // validateLogin(): Observable<any>{
  //   return this.http.get<any[]>(this.url + "Logins")
  // }
  
  validateMethod(UserId: string, Password: string) {
    const param = new HttpParams().set('userId',UserId).set('password', Password)
    return this.http.get(this.url + 'Logins/verify?'+param)
  }
  
  getStore() {
    console.log("Hello world");
    return this.http.get(this.url+"Stores");
  }

  postStore(record: Store) : Observable<Store> {
    console.log(record);
    return this.http.post<Store>(this.url+"Stores",record);
    
  }

  //customer api call
  GetCustomers(){
    return this.http.get(this.url + 'Customers')
  }

PostCustomer(record : CustomerModel) : Observable<CustomerModel> {
  return this.http.post<CustomerModel>(this.url + 'Customers', record);
}

UpdateCustomer(id: number, record: CustomerModel): Observable<CustomerModel>
    {
      return this.http.put<CustomerModel>(
        this.url + 'Customers/' + id,
        record
      );
}

    DeleteCustomer(id : number): Observable<any>
    {
      return this.http.delete(this.url + 'Customers/' + id);
    }

}
