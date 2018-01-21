import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-library",
  templateUrl: "./library.component.html",
  styleUrls: ["./library.component.scss"]
})
export class LibraryComponent implements OnInit {
  invitation: string;

  constructor() {}

  ngOnInit() {
    this.setInvitation();
  }

  setInvitation() {
    this.invitation = "Welcome to my library";
  }
}
