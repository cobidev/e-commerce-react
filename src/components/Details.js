import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

const Details = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          id,
          company,
          title,
          img,
          info,
          price,
          inCart
        } = value.detailProduct;

        return (
          <article className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end title */}
            {/* product info */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} alt={title} className="img-fluid" />
              </div>
              {/* product text */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>Model: {title}</h2>
                <h4 className="text-title text-muted mt-3 mb-2">
                  This is made by: {company}
                </h4>
                <h4 className="text-blue">
                  <strong>Price: ${price}</strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-2">
                  Info about the product:
                </p>
                <p className="text-muted lead">{info}</p>
                {/* buttons */}
                <div>
                  <Link to="/" onClick={() => value.handleCloseDetail()}>
                    <ButtonContainer>Back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}>
                    {inCart ? 'In Cart' : 'Add to Cart'}
                  </ButtonContainer>
                </div>
              </div>
            </div>
            {/* end product info */}
          </article>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
