import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../context';

const ProductWrapper = styled.article`
  .card {
    border-color: transparent;
    transition: all linear 0.3s;

    &:hover {
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);

      .card-footer {
        background: rgba(247, 247, 247);
      }
    }

    .card-footer {
      background: transparent;
      border-top: transparent;
      transition: all linear 0.3s;
    }

    .img-container {
      position: relative;
      overflow: hidden;

      &:hover {
        .cart-btn {
          transform: translate(0, 0);
        }
      }

      .card-img-top {
        transition: all 0.5s linear;

        &:hover {
          transform: scale(1.2);
        }
      }

      .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--light-blue);
        border: none;
        color: var(--main-white);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 0.5s ease;

        &:hover {
          color var(--main-blue);
          cursor: pointer;
        }
      }
    }
  }
`;

const Product = ({ product }) => {
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        {/* card image */}
        <ProductConsumer>
          {value => {
            return (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(product.id)}>
                <Link to="/details">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="card-img-top"
                  />
                </Link>
                <button
                  className="cart-btn"
                  disabled={product.inCart ? true : false}
                  onClick={() => value.addToCart(product.id)}>
                  {product.inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      In Cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            );
          }}
        </ProductConsumer>

        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{product.title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">${product.price}</span>
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

export default Product;
