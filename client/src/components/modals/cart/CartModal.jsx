import React, { Component } from 'react';
import axios from 'axios';

import CartItems from './cartItems.jsx';

class CartModal extends Component {
  constructor(props) {
    super(props);

    this.leftScroll = this.leftScroll.bind(this);
    this.righttScroll = this.righttScroll.bind(this);
  }

  componentDidMount() {
    document.getElementById('slider').scrollLeft += this.props.xCoords;
  }

  leftScroll() {
    document.getElementById('slider').scrollLeft -= 500;
    let coords = this.props.xCoords - 500 < 0 ? 0 : this.props.xCoords - 500;
    this.props.setCoords(coords);
  }

  righttScroll() {
    document.getElementById('slider').scrollLeft += 500;
    let coords =
      this.props.xCoords + 500 < 500 * (this.props.cartQuantity - 1)
        ? this.props.xCoords + 500
        : 500 * (this.props.cartQuantity - 1);
    this.props.setCoords(coords);
  }

  render() {
    return (
      <div className="cartContainer">
        <div className="cartWrapper">
          <div className="cartWindow">
            <div
              className="cartContents"
              onMouseLeave={this.props.hideCartModal}
            >
              <div className="cartLeft">
                <div className="cartTitle">Added to your cart</div>
                <div className="cartDetails">
                  <div onClick={this.leftScroll} className="control-prev-btn">
                    <i className="fa-arrow-left"></i>
                  </div>
                  <div id="slider" className="cartItems">
                    {this.props.cartItems.map((item, index) => (
                      <CartItems
                        key={index}
                        index={index}
                        cartQuantity={
                          this.props.cartQuantity / this.props.cartQuantity
                        }
                        productName={item.productName}
                        productImage={item.productImage}
                      />
                    ))}
                  </div>
                  <div onClick={this.righttScroll} className="control-next-btn">
                    <i className="fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="cartRight">
                <span
                  className="cartModalClose"
                  onClick={this.props.hideCartModal}
                >
                  <p>✖</p>
                </span>
                <div className="cartRightDetails">
                  <div className="cartQuantityModal">
                    <p>Total items added to cart: </p>
                    <p>{this.props.cartQuantity}</p>
                  </div>
                  <button className="cartCheckout">Cart and Checkout</button>
                  <div className="cartAdditional">
                    <p>Free Shipping</p>
                    <p>No minimum purchase.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = CartModal;
