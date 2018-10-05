import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { UpperFooterComponent } from './footer/upper-footer/upper-footer.component';
import { LowerFooterComponent } from './footer/lower-footer/lower-footer.component';
import { Routes,RouterModule } from '@angular/router';
//to form module we have to import.for two way data binding
import {FormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ListComponent } from './list/list.component';



// routes array.
// const appRoutes : Routes = [   // first the URL on which we want to navigate. second is the component name.
//   {path : 'home',component:AppComponent},
//   {path : 'users',component:UsersComponent},
//   {path : 'registeration',  component:RegisterationComponent}
// ];

@NgModule({
  declarations:[
    HeaderComponent,
        AppComponent,
        FooterComponent,
        UpperFooterComponent,
        LowerFooterComponent,
        BodyComponent,
        UsersComponent,
        RegisterationComponent,   
   ListComponent],
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
 //   RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
