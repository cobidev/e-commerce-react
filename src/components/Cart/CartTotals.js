import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

const CartTotals = ({ value, history }) => {
  const { cartTotal, cartTax, cartSubTotal, clearCart } = value;

  console.log(cartTotal, cartTax, cartSubTotal);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 my-4 ml-sm-5 ml-md-auto text-capitalize text-right">
            {/* Clear Cart */}
            <Link to="/">
              <button
                className="btn btn-outline-danger mb-3 text-uppercase px-5"
                type="button"
                onClick={() => clearCart()}>
                clear cart
              </button>
            </Link>
            {/* SubTotal */}
            <h5>
              <span className="text-title">
                subtotal: <strong>${cartSubTotal}</strong>
              </span>
            </h5>
            {/* Tax */}
            <h5>
              <span className="text-title">
                tax: <strong>${cartTax}</strong>
              </span>
            </h5>
            {/* Total */}
            <h5>
              <span className="text-title">
                total: <strong>${cartTotal}</strong>
              </span>
            </h5>
            {/* PayPal Button */}
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotals;
