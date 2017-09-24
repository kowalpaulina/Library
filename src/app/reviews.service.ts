import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";


import { Review } from './review';
import { REVIEWS } from './review-mock';


@Injectable()
export class ReviewsService {

  constructor(private http: Http) {}

  
    getReviews(): Promise<Review[]> {
    return Promise.resolve(REVIEWS);
  }
}

