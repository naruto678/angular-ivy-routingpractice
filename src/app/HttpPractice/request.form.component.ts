import {Component, ElementRef,OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import {HttpService} from './http.service';

@Component({
  selector:'request-form-component',
  templateUrl:'./request.form.component.html'
})
export class CustomForm{

  public title:string;
  public content:string; 
  public loading:boolean=false;
  constructor(public httpService:HttpService){}


  public posts:{title:string, content:string}[]=[];  


  public postUrl:string='https://reqres.in/api/users';

  public getUrl:string="https://reqres.in/api/users?page=2";

  onSendPosts=()=>this.httpService.sendPosts(this.postUrl,{name:this.title,job:this.content});

  onFetchPosts=()=>{
    this.posts=[];
    this.loading=true;
    setTimeout(()=>{
      
      this.posts=this.httpService.fetchPosts(this.getUrl);
      this.loading=false;
      
      },2000);
    
    
    }
  onClearPosts=()=>this.posts=[];
  
  
}