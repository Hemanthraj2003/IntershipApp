import {  NgModule, ChangeDetectionStrategy, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CollegeComponent } from './college/college.component';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { DropdownComponent } from './dropdown/dropdown.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CollegeComponent,
    UserComponent,
    AuthComponent,
    HomeComponent,
    DropdownComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule  ,
    MatNativeDateModule 

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
