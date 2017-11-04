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
  userPermission$ = new Subject<boolean>();
  users_url = "http://localhost:3000/users/";
  users: Users[];
  userLoggedIn: Users;
  userData: Users;
  public test: string = "test";
  invitation: string;
  redirectUrl: string;
  deletedUser: Users;
  isUser: boolean;

  constructor(private http: Http) {}


      signin(user: Users) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${this.users_url}login`, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }


      logout() {
        localStorage.clear();
        
    }


  getUserStream():Observable<Users[]> {
    this.getUsers();
    console.log("getUserStream", this.users);
    return Observable.from(this.usersStream$).startWith(this.users);
  }

  getUsers() {
    return this.http
      .get(this.users_url)
      .map(response => response.json().obj)
      .subscribe(users => {
        console.log("getUsers1", users);
        this.users = users;
        this.usersStream$.next(this.users);
        // this.checkUsers(this.users);
      });
  }

  getUsersafterDelete() {
    return this.http
      .get(this.users_url)
      .map(response => response.json().obj)
      .subscribe(users => {
        console.log("getUsersAfterDelete", users);
        this.users = users;
        this.usersStream$.next(this.users);
        this.checkUsers(this.users);
      });
  }

  deleteUser(user){
    let request;
    request = this.http.delete(this.users_url + user.id);
    return request.map(response => response.json()).do(users => {
      this.usersStream$.next(this.users);
      this.getUsersafterDelete();
    });
  }

  //receive data about logged in user from component
  loggedInUser(userLoggedIn):Users {
    this.userLoggedIn = userLoggedIn;
    return this.userLoggedInFun(userLoggedIn);
  }

  userLoggedInFun(userData):Users {
    this.userData = userData;
    return this.userData;
  }

  returnCheckedUsers(isUser:boolean) {
    this.isUser = isUser;
    return this.userPermission$.next(isUser);
  }

  // check if loggedIn user is in list of users
  checkUsers(users:Users[]) {
    this.userLoggedInFun(this.userLoggedIn);
    const ifUserRegister = this.users.some(
      user => user.password == this.userLoggedIn.password
    );
    this.returnCheckedUsers(ifUserRegister);
    return this.userPermission$.next(ifUserRegister);
  }

  getUserPermission():Observable<boolean> {
    this.returnCheckedUsers(this.isUser);
    return Observable.from(this.userPermission$).startWith(true);
  }
}