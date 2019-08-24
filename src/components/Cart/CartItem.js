import React from 'react';

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { incrementQuantity, decrementQuantity, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      {/* Image */}
      <article className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt={title}
          style={{ width: '5rem', height: '5rem' }}
          className="img-fluid"
        />
      </article>
      {/* Title */}
      <article className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>
        {title}
      </article>
      {/* Price */}
      <article className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span>${price}
      </article>
      {/* Increment/Count/Decrement */}
      <article className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => decrementQuantity(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => incrementQuantity(id)}>
              +
            </span>
          </div>
        </div>
      </article>
      {/* Remove Item */}
      <article className="col-10 mx-auto col-lg-2">
        <div>
          <i
            className="fas fa-trash cart-icon"
            onClick={() => removeItem(id)}
          />
        </div>
      </article>
      {/* Total */}
      <article className="col-10 mx-auto col-lg-2">
        <span className="d-sm-none">Item total: </span>
        <strong>${total}</strong>
      </article>
    </div>
  );
};

export default CartItem;
