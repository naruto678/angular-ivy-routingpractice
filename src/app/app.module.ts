import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderComponent } from "./RoutingPractice/Nav/header.component";
import { ServerList } from "./RoutingPractice/ServerApp/ServerList/server.list.component";

import { UserList } from "./RoutingPractice/ServerApp/UserComponent/user.list.component";
import { ServerForm } from "./RoutingPractice/ServerApp/ServerForm/server.form.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CustomForm } from "./HttpPractice/request.form.component";
import { HttpService } from "./HttpPractice/http.service";
import { Practice } from "./Practice/practice.component";
import { Prac } from "./Practice/prac.component";
import { ActiveUsers, InactiveUsers } from "./Practice/user.component";
import { FirstComponent } from "./Practice/Component/first.component";
import { SecondComponent } from "./Practice/Component/second.component";
const appRoutes: Routes = [
  { path: "server", component: ServerList },
  { path: "users", component: UserList }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    ServerList,
    UserList,
    ServerForm,
    CustomForm,
    Practice,
    Prac,
    ActiveUsers,
    InactiveUsers,
    FirstComponent,
    SecondComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
