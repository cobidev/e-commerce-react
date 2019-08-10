import React, { Component } from 'react';
import { storeProducts } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: {}
  };

  componentDidMount = () => {
    this.setProducts();
  };
  setProducts = () => {
    let products = [];

    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products.push(singleItem);
    });

    this.setState(() => ({ products }));
  };

  getItem = id => {
    const product = this.state.products.find(product => product.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => ({
      detailProduct: product
    }));
  };

  addToCart = id => {
    console.log(`Product ID is: ${id}`);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
