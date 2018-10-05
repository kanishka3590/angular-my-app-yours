import { Component } from '@angular/core'
@Component({
    selector: 'app-header', // it is a selector like html selector.we are giving it a name header.
    //template: '<h1>This is Header</h1>', //here we can give url of html file. 
    templateUrl:'header.component.html'
  })
  
export class HeaderComponent{
    //data flow from component to templete.(one way data binding).(interpolation)
    title:string="Heading Interpolation";
    showMsg():string{
        return this.title;
    }
}

//manually we are creating here header component.
//for creating with angular CLI commands are.
//ng g c footer     (for nested component ng g c footer/upperFooter)
//footer name component will create with four files.
//nd alse registeration done.


//we have to do populate means inside app.component.html file have to add this file.