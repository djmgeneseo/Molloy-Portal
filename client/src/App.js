import React, { Component, Fragment } from 'react';
import './App.css';

import { Header, Body, Footer } from './Components/index'

class App extends Component {

  render() {
    return (<Fragment>
      <Header/>
      <Body/>
      <Footer/>
    </Fragment>);
  }
}

export default App;
