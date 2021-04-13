import { Component } from "@angular/core";
@Component({
  selector: "app-component",
  template: `
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-12">
          <p>Add new Servers</p>
          <label>Server Name</label>
          <input type="text" class="form-control" [(ngModel)]="serverName" />
          <label>Server Content</label>
          <input type="text" class="form-control" [(ngModel)]="serverContent" />
          <button class="btn btn-primary" (click)="addServer()">
            Add Server
          </button>
          <button
            class="btn btn-primary"
            style="margin: 20px; "
            (click)="addBlueprint()"
          >
            Add Blueprint
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-12">
          <div
            class="card"
            *ngFor="let element of serverList"
            style="margin-bottom:1.1em"
          >
            <div class="card-header">{{ element.server_name }}</div>
            <div class="card-body">{{ element.server_content }}</div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 30px;
      }
    `
  ]
})
export class ServerComponent {
  serverName: string;
  serverContent: string;
  serverList = [];

  constructor() {
    this.serverName = "";
    this.serverContent = "";
  }
  addServer = () => {
    this.serverList.push({
      server_name: this.serverName,
      server_content: this.serverContent
    });
    console.log("a new server was added");
  };
  addBlueprint = () => {
    this.serverList.push({
      server_name: this.serverName,
      server_content: this.serverContent
    });
    console.log("a new blueprint was added");
  };
}
