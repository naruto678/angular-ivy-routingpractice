import {Injectable,OnChanges,SimpleChanges} from '@angular/core'
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn:'root'
})
export class HttpService implements OnChanges{
  public loadedPosts:{title:string, content:string}[]=[];
  constructor(public httpClient:HttpClient){

  }


  ngOnChanges(change:SimpleChanges){
    console.log(change.loadedPosts);
  }
  printSomething=()=>console.log(this.loadedPosts);

  sendPosts=(postUrl:string,requestBody:{name:string, job:string})=>{
    
    this.httpClient.post(postUrl, requestBody)
    
    .subscribe((response)=>{
      console.log(response);
    });

  }
  fetchPosts(getUrl:string) : {title:string, content:string}[]{
    this.loadedPosts=[];
    this.httpClient.get<{data:{avatar:string,first_name:string, last_name:string, email:string , id:string }[]}>(getUrl)
        .pipe(map((responseBody)=>responseBody['data']))
        .subscribe((response)=>{
          
                  
          for(let i=0;i<response.length;i++){
            let  tempTitle=response[i]['first_name'];
            let tempContent=response[i]['email'];
  
            this.loadedPosts.push({title:tempTitle, content:tempContent});

          }
        
          
        });
    return this.loadedPosts;
  }
  clearPosts(clearUrl:string){
    
  }


}