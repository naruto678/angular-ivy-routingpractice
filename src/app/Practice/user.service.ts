import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class UserService {
  active_user: string[] = [];
  inactive_user: string[] = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.active_user.push(i.toString());
      this.inactive_user.push((2 * i).toString());
    }
  }

  setToActive(id: number) {
    this.active_user.push(this.inactive_user[id]);
    this.inactive_user.splice(id, 1);
  }

  setToInactive(id: number) {
    this.inactive_user.push(this.active_user[id]);
    this.active_user.splice(id, 1);
  }
}
