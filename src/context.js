import React, { Component } from 'react';
import { storeProducts } from './data';

// Create your Context ( this case: Product )
const ProductContext = React.createContext();

// Create your Provider ( this case: Product )
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: {},
    cart: []
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

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => ({
      detailProduct: product
    }));
  };
  getItem = id => {
    const product = this.state.products.find(product => product.id === id);
    return product;
  };

  addToCart = id => {
    // let tempProducts = [...this.state.products];
    // const index = tempProducts.indexOf(this.getItem(id));
    const product = this.getItem(id);
    product.inCart = true;
    product.count++;
    const price = product.price;
    product.total = price;

    this.setState(() => ({
      cart: [...this.state.cart, product]
    }));
  };

  // Render HOC component that holds the state as props, to provide the values through children components
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

// Create Consumer from the Context
const ProductConsumer = ProductContext.Consumer;

// Export the Provider and the Consumer ( this case: Product )
export { ProductProvider, ProductConsumer };
