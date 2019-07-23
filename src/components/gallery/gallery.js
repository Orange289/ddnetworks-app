import React, {Component} from 'react';

import './gallery.scss';

import InfoBlock from '../general/info-block';
import Filter from '../general/filter';
import VideoSwiper from './video-swiper';
import PhotoSwiper from './photo-swiper';

export default class Gallery extends Component {
  state = {
    itemSelected: 'videos'
  };

  onChangeItem = (name) => {
    this.setState({
      itemSelected: name
    });
  };

  tabs = [
    { name: 'videos', label: 'Videos' },
    { name: 'photos', label: 'Photos' }
  ];

  contents = [
    {
      name: 'videos',
      label: 'Videos',
      content: 
        <VideoSwiper />
    },
    {
      name: 'photos',
      label: 'Photos',
      content: 
        <React.Fragment>
          <div className="swiper-slide">
            <PhotoSwiper />
          </div>
          <div className="swiper-slide">Slide 2</div>
        </React.Fragment>
    }
  ];
  
  render() {
    return(
      <section className="gallery" id="gallery">
        <InfoBlock>
          <InfoBlock.Title>
            Gallery
          </InfoBlock.Title>
          <InfoBlock.Content>
            <Filter
              classTabs="gallery__tabs"
              classContents="gallery__contents"
              tabs={this.tabs}
              contents={this.contents}
              itemSelected={this.state.itemSelected}
              onChangeItem={this.onChangeItem}
            />
          </InfoBlock.Content>
        </InfoBlock>
      </section>
    )
  }
};
