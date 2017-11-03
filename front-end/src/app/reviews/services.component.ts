import { Component, OnInit } from '@angular/core';

import { Review } from '../review';
import { ReviewsService } from '../reviews.service';

import { Users } from '../registration/user';


@Component({
  selector: 'services-app',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})



export class ServicesComponent implements OnInit {
  reviews: Review[];
  users:Users[];
  selectedReview: Review;

  constructor(private reviewsService: ReviewsService) { }

   getReviews(): void {
    this.reviewsService.getReviews().then(reviews => this.reviews = reviews);
  }


  ngOnInit(): void {
      this.getReviews();
    }

  onSelect(review: Review): void {
    this.selectedReview = review;
  }

  
}
