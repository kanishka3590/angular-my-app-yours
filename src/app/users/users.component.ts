import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
//two way binding
  //  name:string;
// registerData={
// };
//  registerUser():any{
//   //  console.log(this.name);
//    console.log(this.registerData);
   
//  }

user = {
  email:"",
  pwd:""
};

login():any{
  if(this.user.email=="kanishka.3590@gmail.com" && this.user.pwd=="1234")
    console.log("Login Successful!!!");
  else if(this.user.email=="" || this.user.pwd=="")
    console.log("Please Enter Required Fields");
  else if(this.user.email!="kanishka.3590@gmail.com")
    console.log("Please Enter Correct User Name ")
  else if(this.user.pwd!="1234")
    console.log("Wrong Password !!!");
  
}

}
