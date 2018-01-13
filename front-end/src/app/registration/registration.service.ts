import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Subject, Observable } from "rxjs";
import { Users } from "./user";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class RegistrationService {
  constructor(private http: Http, private errorService: ErrorService) {}

  server_url = "http://localhost:3000/users/register/";
  users: Users[] = [];
  token = localStorage.getItem('token') ? 'token=' + localStorage.getItem('token') : '';
  userId = localStorage.getItem('userId') ? '?userId=' + localStorage.getItem('userId') : '';


  registerUser(users: Users) {
    console.log(users);
    const headers = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post(`${this.server_url}${this.userId}&${this.token}`, users, { headers: headers })
      .map(response => response.json().obj)
      .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
      })
      .subscribe(users => {
      })
  }
}


