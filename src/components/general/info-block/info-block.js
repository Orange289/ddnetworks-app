import React, {Component} from 'react';

import './info-block.scss';

function Title () {
  return null;
};

function Content () {
  return null;
};

export default class InfoBlock extends Component {
  static Title = Title;
  static Content = Content;

  render () {
    const { children } = this.props;
    const title = children.find(child => child.type === Title);
    const content = children.find(child => child.type === Content);

    return ( 
      <div className="info-block">
        <div>
          <h3>{title ? title.props.children : null}</h3>
        </div>
        <div>{content ? content.props.children : null}</div>
      </div>
    );
  }
};