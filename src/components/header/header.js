import React, { Component } from 'react';

import Menu from '../general/menu';

import './header.scss';

export default class Header extends Component {

  state = {
    showMenu : false
  };

  toggleMenu = () => {
    this.setState((state) => {
      return {
        showMenu: !state.showMenu
      }
    });
  };

  render() {
    return (
      <header className="header">
        <div className="container header__top level">
          <a className="header__logo level-left" href="/">
            DDNetworks
          </a>
          <button
            className="header__btn btn level-right"
            style={{ background: 'red' }}
            onClick={this.toggleMenu}>
            <span className="lines level-item"></span>
          </button>
        </div>
        <div className="header__menu"><Menu isOpen={this.state.showMenu} /></div>
      </header>
    )
  }
}