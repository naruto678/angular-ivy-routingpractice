import {Component} from '@angular/core'
import {HttpClient} from '@angular/common/http'
@Component({

  selector:'user-list-component',
  templateUrl:'./user.list.component.html'
})
export class UserList{
  userList:User[]=[
    {userName:'arnab',userId:'10'},
    {userName:'anurag',userId:'20'},
    
    {userName:'other-user',userId:'30'}
    

  ]
  constructor(private httpClient:HttpClient){}


  onLoadData(){
    this.httpClient.get("https://reqres.in/api/users?page=2").subscribe(responseBody=>{
      console.log('this is the response buddy');
      console.log(responseBody);
    });
  }
}


export class User{
  constructor(public userName:string, public userId:string){}
}