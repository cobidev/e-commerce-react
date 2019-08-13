import React, { Component } from 'react';
import { storeProducts } from './data';

// Create your Context ( this case: Product )
const ProductContext = React.createContext();

// Create your Provider ( this case: Product )
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: {},
    cart: [],
    modalOpen: false,
    modalProduct: {}
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
    this.setState(() => ({ detailProduct: product }));
  };

  handleCloseDetail = () => this.setState(() => ({ detailProduct: {} }));

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

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => ({ modalProduct: product, modalOpen: true }));
  };

  closeModal = () => {
    this.setState(() => ({
      modalProduct: {},
      detailProduct: {},
      modalOpen: false
    }));
  };

  // Render HOC component that holds the state as props, to provide the values through children components
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleCloseDetail: this.handleCloseDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal
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
