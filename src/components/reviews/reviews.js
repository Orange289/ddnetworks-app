import React from 'react';

import './reviews.scss';

import ReviewsSwiper from './reviews-swiper';

import InfoBlock from '../general/info-block';

const Reviews = () => {

  return(
    <section className="reviews" id="#reviews">
      <InfoBlock>
        <InfoBlock.Title>
          Reviews
          </InfoBlock.Title>
        <InfoBlock.Content>
          <ReviewsSwiper />
        </InfoBlock.Content>
      </InfoBlock>
    </section>
  );
};

export default Reviews;