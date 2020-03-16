import React from 'react';
import axios from 'axios';

import TopNav from './TopNavBar.jsx';
import CentralNav from './CentralNavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upperNav: [
        'SHOP REI',
        'REI OUTLET',
        'USED GEAR',
        'REI ADVENTURES',
        'CLASSES & EVENTS',
        'EXPERT ADVICE',
        'CO-OP JOURNAL',
        'CONVERSATIONS',
        'CAMPING PROJECT'
      ]
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    console.log('Search Button Click');
  }

  render() {
    return (
      <div id="navigation">
        <TopNav list={this.state.upperNav} classType={'topNavItems'} />
        <CentralNav />
      </div>
    );
  }
}

module.exports = App;
