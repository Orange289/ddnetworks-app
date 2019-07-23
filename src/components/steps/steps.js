import React, {Component} from 'react';

import './steps.scss';

import InfoBlock from '../general/info-block';
import Filter from '../general/filter';

export default class Steps extends Component {
  state = {
    itemSelected: 'step1'
  };

  onChangeItem = (name) => {
    this.setState({
      itemSelected: name
    });
  };

  tabs = [
    {name: 'step1', label: 'Step 1'},
    {name: 'step2', label: 'Step 2'},
    {name: 'step3', label: 'Step 3'}
  ];

  contents = [
    {
      name: 'step1',
      label: 'Step 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      name: 'step2',
      label: 'Step 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      name: 'step3',
      label: 'Step 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }
  ];

  render(){
    return(
      <section className="steps" id="steps">
        <InfoBlock>
          <InfoBlock.Title>
            Steps
          </InfoBlock.Title>
          <InfoBlock.Content>
            <Filter
              classTabs="steps__tabs"
              classContents="steps__contents"
              tabs={this.tabs}
              contents={this.contents}
              itemSelected={this.state.itemSelected}
              onChangeItem={this.onChangeItem}
              hasLabel
            />
          </InfoBlock.Content>
        </InfoBlock>
      </section>
    )
  }
}

