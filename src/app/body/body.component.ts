import { Component } from '@angular/core'
@Component({
    selector: 'app-body', 
    templateUrl:'./body.component.html',
    styleUrls:['./body.component.css']
  })
  
export class BodyComponent{
    content:string="Content For Body";
    nestedTag = '<p>This is nested paragrah structure.</p>';
    input ='';
    email:string="kanishka3590";
    showMsg():string{  //component to DOM(one way binding)
        return this.content;
    }
    sendData(name){ //DOM to component(one way binding)
        console.log(name.value);
        
    }
    passData($event){ //DOM to component($event Object)
        console.log($event.target.value);
        this.input = $event.target.value;
        
    }
    passData2(){
        console.log(this.email);
        
    }
}
