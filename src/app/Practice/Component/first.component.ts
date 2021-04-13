import { Component } from "@angular/core";
@Component({
  selector: "first-component",
  template: `
    <button class="btn btn-primary" (click)="onClick()">Click me</button>
  `
})
export class FirstComponent {
  onClick = () => console.log("button was clicked");
}
