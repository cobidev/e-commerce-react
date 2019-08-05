import React from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';

class ProductList extends React.Component {
  state = {
    products: storeProducts
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row" />
          </div>
        </div>
        <section>
          <Product />
        </section>
      </>
    );
  }
}

export default ProductList;
