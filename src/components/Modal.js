import React, { Component } from 'react';
import { ButtonContainer } from '../components/Button';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ModalWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--main-white);
  }
`;

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { title, img, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          }

          return (
            <ModalWrapper>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                    <h5>item added to the cart !</h5>
                    <img src={img} alt={title} className="img-fluid" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">Price: ${price}</h5>
                    <Link to="/">
                      <ButtonContainer onClick={() => closeModal()}>
                        Store
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer cart onClick={() => closeModal()}>
                        Go To Cart
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}
