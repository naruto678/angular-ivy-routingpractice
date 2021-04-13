import { Component } from "@angular/core";
@Component({
  selector: "app-practice",
  templateUrl: "practice.component.html"
})
export class Practice {
  name: string = "Arnab";
  isEmpty: Boolean = false;

  onButtonClick = () => {
    this.name = "";
    this.isEmpty = true;
  };
  checkStatus = () => {
    if (this.name.length == 0) this.isEmpty = true;
    else this.isEmpty = false;
  };
}
