import React, { Component } from 'react';

import './menu.scss';

export default class Menu extends Component {


  render() {
    const { isOpen } = this.props;
    const classState = isOpen ? 'active': '';

    return (
      <ul className={`container level ${classState}`}>
        <li><a href="#services">Services</a></li>
        <li><a href="#steps">Steps</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact us</a></li>
      </ul>
    );
  }

};