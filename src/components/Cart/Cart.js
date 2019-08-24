import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../../context';

const Cart = () => (
  <section>
    <Title name="your" title="cart" />
    <ProductConsumer>
      {value => {
        const { cart } = value;

        if (!cart.length) {
          return <EmptyCart />;
        }

        return (
          <>
            <CartColumns />
            <CartList value={value} />
            <CartTotals value={value} />
          </>
        );
      }}
    </ProductConsumer>
  </section>
);

export default Cart;
