import { Users } from "./../registration/user";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { AsyncSubject } from "rxjs/AsyncSubject";

import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";

@Injectable()
export class AuthService {
  isLoggedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);
  usersStream$ = new Subject<Users[]>();
  users_url = "http://localhost:3000/users/";
  users_url_manage = "http://localhost:3000/admin/users-manage/"
  users: Users[];
  userLoggedIn: Users;
  redirectUrl: string;

  constructor(private http: Http) {}

  signin(user: Users) {
    const body = JSON.stringify(user);
    const headers = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post(`${this.users_url}login`, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
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
      .get(this.users_url)
      .map(response => response.json().obj)
      .subscribe(users => {
        this.users = users;
        this.usersStream$.next(this.users);
      });
  }


  upadeApprovedStatus(user: Users){
    const headers = new Headers({ "Content-Type": "application/json" });
    let request;
    request = this.http.patch(`${this.users_url_manage}${user._id}`, user, {
        headers: headers
      });
    return request
      .map(response => response.json().obj)
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteUser(user: Users) {
    let request;
    request = this.http.delete(`${this.users_url_manage}${user._id}`);
    return request
      .map(response => response.json().obj)
      .do(users => {
        console.log(users);
        this.getUsers();
    });
  }
}
