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

    let lastScrollTop = 0;
    const hiddenHeaderClass = 'hidden';
    const fixedHeaderClass = 'fixed';
    let headerTop = 70;

    window.addEventListener('scroll', function() {
      const st = window.pageYOffset || document.documentElement.scrollTop; 
      if ((st > lastScrollTop) && (window.pageYOffset > headerTop)) {
        document.querySelector('.header').classList.add(hiddenHeaderClass);
      } else {
          document.querySelector('.header').classList.remove(hiddenHeaderClass);
          if (window.pageYOffset > headerTop) {
            document.querySelector('.header').classList.add(fixedHeaderClass);
          } else {
            document.querySelector('.header').classList.remove(fixedHeaderClass);
          }
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);

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