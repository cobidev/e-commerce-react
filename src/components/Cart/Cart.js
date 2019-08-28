import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../../context';

const Cart = props => (
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
            <CartTotals value={value} history={props.history} />
          </>
        );
      }}
    </ProductConsumer>
  </section>
);

export default Cart;
