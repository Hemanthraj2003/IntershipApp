import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CollegeComponent } from './college/college.component';
import { ProfileComponent } from './profile/profile.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CustomerComponent } from './customer/customer.component';
import { StoresComponent } from './store/store.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'home', component: HomeComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'College', component: CollegeComponent},
  {path: 'Profile', component: ProfileComponent},
  {path: 'dropdown', component: DropdownComponent},
  {path: 'store', component: StoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
