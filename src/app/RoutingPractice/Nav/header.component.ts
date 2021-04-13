import {Component } from '@angular/core'
import {Router } from '@angular/router';
@Component({
  selector:'header-component',
  templateUrl:'header.component.html'
})
export class HeaderComponent{
  constructor(private router:Router){}
  onLoadServer(){
    this.router.navigate(['/server'])
  }
}