import React from 'react';
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
