import { Users } from "./../registration/user";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { AsyncSubject } from "rxjs/AsyncSubject";
import { ErrorService } from "../errors/error.service";

// import "rxjs/add/observable/of";
// import "rxjs/add/operator/do";
// import "rxjs/add/operator/delay";

@Injectable()
export class AuthService {
  isLoggedIn: Subject<boolean> = new Subject<boolean>();
  usersStream$ = new Subject<Users[]>();
  loggedUserStream$ = new Subject<Users>();
  users_url = "http://localhost:3000/users/";
  users_url_manage = "http://localhost:3000/admin/users-manage/";
  users: Users[];
  user: Users;
  userLoggedIn: Users;
  redirectUrl: string;
  token = localStorage.getItem("token")
    ? "?token=" + localStorage.getItem("token")
    : "";
  userId = localStorage.getItem("userId")
    ? "?userId=" + localStorage.getItem("userId")
    : "";

  constructor(
    private http: Http,
    private errorService: ErrorService,
    public router: Router
  ) {}

  signin(user: Users) {
    const body = JSON.stringify(user);
    const headers = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post(`http://localhost:3000/login/`, body, { headers: headers })
      .map((response: Response) => response.json())
      .do(userData => {
        this.user = userData;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  logout() {
    localStorage.clear();
  }

  getUserStream(): Observable<Users[]> {
    this.getUsers();
    return Observable.from(this.usersStream$).startWith(this.users);
  }

  getUsers() {
    return this.http
      .get(`${this.users_url}${this.userId}`)
      .map(response => response.json().obj)
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      })
      .subscribe(users => {
        this.users = users;
        this.usersStream$.next(this.users);
      });
  }

  upadeApprovedStatus(user: Users) {
    const headers = new Headers({ "Content-Type": "application/json" });
    let request;
    request = this.http.patch(
      `${this.users_url_manage}${user._id}${this.userId}`,
      user,
      {
        headers: headers
      }
    );
    return request
      .map(response => response.json().obj)
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  updateFriendStatus(user: Users) {
    const headers = new Headers({ "Content-Type": "application/json" });
    let request;
    request = this.http.patch(
      `${this.users_url_manage}${user._id}${this.userId}`,
      user,
      {
        headers: headers
      }
    );
    return request
      .map(response => response.json().obj)
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  deleteUser(user: Users) {
    let request;
    request = this.http.delete(
      `${this.users_url_manage}${user._id}${this.userId}`
    );
    return request
      .map(response => response.json().obj)
      .do(users => {
        console.log(users);
        this.getUsers();
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }
}
