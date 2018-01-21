import { Component, OnInit } from "@angular/core";
import { Error } from "./error.model";
import { ErrorService } from "./error.service";

@Component({
  selector: "app-errors",
  templateUrl: "./errors.component.html",
  styleUrls: ["./errors.component.scss"]
})
export class ErrorsComponent implements OnInit {
  error: Error;
  display = "none";

  constructor(private errorService: ErrorService) {}

  onError() {
    this.display = "none";
  }

  ngOnInit() {
    this.errorService.errorOccurred.subscribe((error: Error) => {
      this.error = error;
      this.display = "block";
    });
  }
}
