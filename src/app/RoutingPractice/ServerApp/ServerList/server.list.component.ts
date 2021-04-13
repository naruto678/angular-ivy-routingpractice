import {Component,OnInit} from '@angular/core'
@Component({
  selector:'server-list-component',
  templateUrl:'./server.list.component.html'
})
export class ServerList{
  serverList:Server[]=[
    {serverName:'arnabServer',serverStatus:'active'},
    {serverName:'anuaragServer',serverStatus:'active'},
    {serverName:'otherServer',serverStatus:'inactive'}
    ];
  
  
}


export class Server{
  constructor(public serverName:string, public serverStatus:string){}
}