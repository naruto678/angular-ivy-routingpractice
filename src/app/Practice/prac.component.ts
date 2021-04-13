import { Component } from "@angular/core";

@Component({
  selector: "app-prac",
  templateUrl: "./prac.component.html",
  styles: [
    `
      .displayClass {
        color: white;
      }
    `
  ]
})
export class Prac {
  paragraphs: String[] = [];
  isEnabled: boolean = false;
  onButtonClick = () => {
    this.isEnabled = !this.isEnabled;
    this.paragraphs.push("Para " + new Date());
  };
}
