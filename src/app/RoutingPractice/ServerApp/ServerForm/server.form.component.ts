import {Component} from '@angular/core'
@Component({
  selector:'server-form-component',
  templateUrl:'./server.form.component.html'
})
export class ServerForm{
  public tempServerName:string;
  public tempServerStatus:string;
  onSubmit(){
    console.log('the form got submitted',this.tempServerName,this.tempServerStatus);
  
  }

}
