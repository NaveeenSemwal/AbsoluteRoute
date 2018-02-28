import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

// Step - 1 of Routing 
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContactComponent } from './contact/contact.component';
import { Route } from '@angular/compiler/src/core';


// Step - 2 of Routing
const routes : Routes =[

  {path :'employee',component : EmployeeComponent},
  {path:'contact',component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ContactComponent
  ],
  imports: [

    // Step - 3 of Routing
    RouterModule.forRoot(routes,{enableTracing : true}),

// end here 

    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
