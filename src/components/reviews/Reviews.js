import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviewsList = this.props.store.getState().reviews.filter((review)=> review.restaurantId === this.props.restaurantId )
    const reviewsFiltered = reviews.map((review, index) => {
      return <Review review={review} key={index} store={this.props.store}/>
    })
    return (
      <ul>
        {reviewsFiltered}
      </ul>
    );
  }
};

export default Reviews;