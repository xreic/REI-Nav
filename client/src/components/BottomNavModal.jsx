import React from 'react';
import $ from 'jquery';

class NavModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'Camp & Hike': [],
      Climb: [],
      Cycle: [],
      Paddle: [],
      Run: [],
      Snow: [],
      Travel: [],
      Yoga: [],
      Men: [],
      Women: [],
      Kids: [],
      Deals: [],
      More: []
    };
  }

  render() {
    console.log('Modal Here');
    return (
      <div
        className="modal"
        onClick={(e) => {
          if (e.target.closest('div').className === 'modal') {
            this.props.hideModal(e);
          }
        }}
      >
        <div className="modal-main">Something</div>
      </div>
    );
  }
}

module.exports = NavModal;
