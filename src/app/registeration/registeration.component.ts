import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent  {

  users = {
    name:"",
    email:"",
    pwd:"",
    
  };
  register(){
    console.log(this.users);
  //  if(this.users.pwd!=this.users.cnfpwd) 
}
}
