import React from 'react';

import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'

const PhotoSwiper = () => {
  const params = {
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }

  return (
    <Swiper {...params}>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/lotusthemes/image.jpg" />
      </div>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/lotusthemes/image.jpg" />
      </div>
      <div>
        <img src="https://s3-us-west-2.amazonaws.com/lotusthemes/image.jpg" />
      </div>
    </Swiper>
  )
};

export default PhotoSwiper;

