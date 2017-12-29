import { Users } from "./../registration/user";
import { Injectable, OnInit } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { AsyncSubject } from "rxjs/AsyncSubject";
import { ErrorService } from "../errors/error.service";
import { AuthService } from "../login/auth.service";

import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";

@Injectable()
export class StatusService implements OnInit {
  users: Users[];
  userId: string;
  userStatusStream: Subject<boolean> = new Subject<boolean>();
  approvedStatus: boolean;


  constructor(private authService: AuthService) {
        this.authService.getUserStream().subscribe((users: Users[]) => {
        this.users = users;
    });
  }

  ngOnInit(){

        this.checkStatus(this.userId);  
  }

  checkStatus(userId){
    const loggedUser = this.users.find(user => userId == user._id);
    if(!loggedUser.approved){
        this.approvedStatus = false;
    }
    else{
        this.approvedStatus = true;
    }

    console.log(this.approvedStatus);

    this.userStatusStream.next(this.approvedStatus);

  }

  getStatusStream(){
      return Observable.from(this.userStatusStream).startWith(this.approvedStatus);
  }











}


