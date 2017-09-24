import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { Subject, Observable } from "rxjs";
import { Users } from "../../registration/user";
import { RegistrationService } from "../../registration/registration.service";

@Injectable()
export class ManageUsersService {
  constructor(
    private registrationService: RegistrationService,
    private http: Http
  ) {}
}
