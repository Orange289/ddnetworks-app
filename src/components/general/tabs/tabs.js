import React, {Component} from 'react';

export default class Tabs extends Component {
  
  render() {

    const {tabs, tabSelected} = this.props;

    return (
      tabs.map(({ name, label }) => {
        return (
          <li
            key={name}
            id={name}
            className={(name === tabSelected) ? 'isActive' : ''}
            onClick={() => this.props.onChangeTab(name)}
          >
            {label}
          </li>
        )
      })
    )
  };

};