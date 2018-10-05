import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { UsersComponent } from '../users/users.component';
import { RegisterationComponent } from '../registeration/registeration.component';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';
import { UpperFooterComponent } from '../footer/upper-footer/upper-footer.component';
import { LowerFooterComponent } from '../footer/lower-footer/lower-footer.component';
import {FormsModule} from '@angular/forms';
import { ListComponent } from '../list/list.component';


// routes array.
const appRoutes : Routes = [   // first the URL on which we want to navigate. second is the component name.
    {path : 'home',component:AppComponent},
    {path : 'login',component:UsersComponent},
    {path : 'registeration',  component:RegisterationComponent},
    {path : "", component:BodyComponent}

  ];
  @NgModule({
    declarations: [
       

    ],
    imports: [
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule{

  }