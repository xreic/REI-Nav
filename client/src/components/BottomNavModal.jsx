import React from 'react';

class NavModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Items: []
    };
  }

  render() {
    console.log('Modal Here');
    return <div className="modalContent">Something</div>;
  }
}

module.exports = NavModal;
