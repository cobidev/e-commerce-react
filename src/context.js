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
    modalProduct: {},
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
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
    const product = this.getItem(id);
    product.inCart = true;
    product.count++;
    const price = product.price;
    product.total = price;

    this.setState(
      () => ({
        cart: [...this.state.cart, product]
      }),
      () => this.addTotals()
    );
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

  incrementQuantity = id => {
    console.log('This is increment method');
  };

  decrementQuantity = id => {
    console.log('This is decrement method');
  };

  removeItem = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.products];

    tempCart = tempCart.filter(product => product.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    const productToRemove = tempProducts[index];
    productToRemove.inCart = false;
    productToRemove.count = 0;
    productToRemove.total = 0;

    this.setState(
      () => ({
        cart: [...tempCart],
        products: [...tempProducts]
      }),
      () => this.addTotals()
    );
  };

  clearCart = () => {
    this.setState(
      () => ({
        cart: []
      }),
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(product => (subTotal += product.total));

    const tax = subTotal * 0.1;
    const parsedTax = parseFloat(tax.toFixed(2));

    const total = subTotal + tax;

    this.setState(() => ({
      cartSubTotal: subTotal,
      cartTax: parsedTax,
      cartTotal: total
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
          closeModal: this.closeModal,
          incrementQuantity: this.incrementQuantity,
          decrementQuantity: this.decrementQuantity,
          removeItem: this.removeItem,
          clearCart: this.clearCart
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
