import { Component } from "@angular/core";
@Component({
  selector: "second-component",
  template: `
    <input class="form-control" [(ngModel)]="text" />
    <p>Hello {{ text }}</p>
  `
})
export class SecondComponent {
  text: string = "";
}
