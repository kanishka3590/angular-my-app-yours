// this file has created to share data between classes.
export class PostService{
post2=[
    {
      head:"First",
      body:"Body Item"
    },
    {
      head:"Second",
      body:"Body Second"
    }

  ]
  sendData(){
      return this.post2;
  }
}