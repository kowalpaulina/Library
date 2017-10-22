import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { Subject, Observable } from "rxjs";
import {Users} from './user';

@Injectable()
export class RegistrationService {
  constructor(private http: Http) { }

  server_url = "http://localhost:4000/users/";
  users:Users[] = [];

  registerUser(users:Users){
    return this.http.post(this.server_url, users)
      .map(response => response.json())
    .subscribe();
  }




  

}
