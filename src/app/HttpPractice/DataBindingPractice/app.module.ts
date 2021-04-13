import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ServerComponent } from "./app.component";

@NgModule({
  bootstrap: [ServerComponent],
  declarations: [ServerComponent],
  imports: [BrowserModule, FormsModule]
})
export class DataBindingAppModule {}
