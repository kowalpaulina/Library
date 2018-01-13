import { Users } from "./../registration/user";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { Subject, Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";
import { Router } from "@angular/router";

@Injectable()
export class BorrowedService {
  constructor(
    private http: Http,
    private errorService: ErrorService,
    public router: Router
  ) {}

  user: Users;
  url: string;
  loggedUserId: string;
  token = localStorage.getItem("token")
    ? "?token=" + localStorage.getItem("token")
    : "";
  userId = localStorage.getItem("userId")
    ? "?userId=" + localStorage.getItem("userId")
    : "";

  getUserData(id) {
    this.url = `http://localhost:3000/users/${id}${this.token}`;
    console.log(this.url);
    return this.http
      .get(this.url)
      .map(response => response.json().obj)
      .catch((error: Response) => {
        this.errorService.handleError(error);
        return Observable.throw(error);
      });
  }
}
