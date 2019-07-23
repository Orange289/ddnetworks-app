import React from 'react';

import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'

const VideoSwiper = () => {
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
        <iframe src="https://player.vimeo.com/video/206627186?badge=0" width="640" height="274" frameBorder="0" allowFullScreen=""></iframe>
      </div>
      <div>
        <iframe src="https://player.vimeo.com/video/206627186?badge=0" width="640" height="274" frameBorder="0" allowFullScreen=""></iframe>
      </div>
      <div>
        <iframe src="https://player.vimeo.com/video/206627186?badge=0" width="640" height="274" frameBorder="0" allowFullScreen=""></iframe>
      </div>
    </Swiper>
  )
};

export default VideoSwiper;

