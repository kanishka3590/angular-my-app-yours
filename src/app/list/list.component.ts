import { Component, OnInit } from '@angular/core';
import{ PostService } from '../post.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  post1=["kanishka","kjhjhjv"];
  posts=[
    {
      head:"First",
      body:"Body Item"
    },
    {
      head:"Second",
      body:"Body Second"
    }

  ]
  //to access elements from different class
  postItem;
  constructor(postSrv:PostService){
    this.postItem=postSrv.sendData();
  }
}
