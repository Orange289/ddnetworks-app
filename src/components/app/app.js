import React from 'react';

import './app.scss';

import Header from '../header';
import Intro from '../intro';
import Services from '../services';
import Steps from '../steps';
import Gallery from '../gallery';
import Reviews from '../reviews';
import Team from '../team';
import Footer from '../footer';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Intro />
        <Services />
        <Steps />
        <Gallery />
        <Reviews />
        <Team />
      </main>
      <Footer />
    </React.Fragment>
  )
};

export default App;