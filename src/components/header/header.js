import React, { Component } from 'react';

import Menu from '../general/menu';

import './header.scss';

export default class Header extends Component {

  state = {
    showMenu : false
  };

  toggleMenu = () => {
    this.setState((state) => {
      document.body.classList.toggle('menu-opened');

      return {
        showMenu: !state.showMenu
      }
    });
  };

  render() {
    return (
      <header className="header">
        <div className="header__top">
          <div className="container level">
            <a className="header__logo level-left" href="/">
              DDNetworks
            </a>
            <button
              className="header__btn button level-right"
              onClick={this.toggleMenu}>
              <span className="header__lines level-item"></span>
            </button>
          </div>  
        </div>
        <Menu nameClass="header__menu" isOpen={this.state.showMenu} />
      </header>
    )
  }
}