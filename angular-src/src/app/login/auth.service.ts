import { Users } from "./../registration/user";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

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
  userPermission$ = new Subject<Boolean>();
  users_url = "http://localhost:4000/users/";
  users: Users[];
  userLoggedIn: Users;
  userData: Users;
  public test: string = "test";
  invitation: string;
  redirectUrl: string;
  deletedUser: Users;
  isUser: boolean;

  constructor(private http: Http) {}

  getUserStream():Observable<Users[]> {
    this.getUsers();
    console.log("getUserStream", this.users);
    return Observable.from(this.usersStream$).startWith(this.users);
  }

  getUsers() {
    return this.http
      .get(this.users_url)
      .map(response => response.json())
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
      .map(response => response.json())
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

// getData():Observable<Users[]> {
//         return this.http.get(this.users_url)
//             .map(this.extractData)
//             .catch(this.handleError);
//     }

//     private extractData(res:Response) {
//         let users = res.json();
//         return users;
//     }

//     private handleError(error:any) {
//         // In a real world app, we might use a remote logging infrastructure
//         // We'd also dig deeper into the error to get a better message
//         let errMsg = (error.message) ? error.message :
//             error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//         console.error(errMsg); // log to console instead
//         return Observable.throw(errMsg);
//     }

// }

// redirectUrl: string;
// users: User[];
// private errorMessage: any = '';
//
//
// getData(): Observable<User[]> {
//     return this.http.get('./assets/users.json')
//         .map(this.extractData)
//         .catch(this.handleError);
// }
//
// private extractData(res: Response) {
//     let users = res.json();
//     //return body || [];
//     return users;
// }
//
// private handleError(error: any) {
//     // In a real world app, we might use a remote logging infrastructure
//     // We'd also dig deeper into the error to get a better message
//     let errMsg = (error.message) ? error.message :
//         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//     console.error(errMsg); // log to console instead
//     return Observable.throw(errMsg);
// }
