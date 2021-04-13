import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-active-user",
  template: `
    <ul>
      <li *ngFor="let user of active_users; let i = index">
        {{ user }}
        <a href="#" (click)="setToInactive(i)">Set To Inactive</a>
      </li>
    </ul>
  `
})
export class ActiveUsers implements OnInit {
  active_users = [];

  constructor(private userSerivce: UserService) {}

  ngOnInit() {
    this.active_users = this.userSerivce.active_user;
  }

  setToInactive = (id: number) => {
    this.userSerivce.setToInactive(id);
  };
}

@Component({
  selector: "app-inactive-user",
  template: `
    <ul>
      <li *ngFor="let user of inactive_users; let i = index">
        {{ user }}
        <a href="#" (click)="setToActive(i)">Set To Active</a>
      </li>
    </ul>
  `
})
export class InactiveUsers implements OnInit {
  inactive_users = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.inactive_users = this.userService.inactive_user;
  }
  setToActive = (id: number) => {
    this.userService.setToActive(id);
  };
}
