import React, {Component} from 'react';

import './services.scss';

import InfoBlock from '../general/info-block';
import Filter from '../general/filter';

export default class Services extends Component {
  tabs = [
    { name: 'adv', label: 'Advertising' },
    { name: 'promo', label: 'Promo events' },
    { name: 'photos', label: 'Photos for catalogs' }
  ];
  
  contents = [
    { name: 'adv', content: 'Adv. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
    { name: 'promo', content: 'Promo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
    { name: 'photos', content: 'Photos. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' }
  ];

  state = {
    itemSelected: 'adv'
  };

  onChangeItem = (name) => {
    this.setState({
      itemSelected: name
    });
  };

  render() {
    return (
      <section className="services" id="services">
        <InfoBlock>
          <InfoBlock.Title>
            Services
          </InfoBlock.Title>
          <InfoBlock.Content>
            <Filter
              classTabs="services__tabs"
              classContents="services__contents"
              tabs={this.tabs}
              contents={this.contents}
              itemSelected={this.state.itemSelected}
              onChangeItem={this.onChangeItem}
            />
          </InfoBlock.Content>
        </InfoBlock>
      </section>
    );
  }

};