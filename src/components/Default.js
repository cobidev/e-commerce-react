import React from 'react';

const Default = props => {
  console.log(props);
  return (
    <section className="container">
      <div className="row">
        <div className="col-10 mx-auto text-uppercase text-title text-center pt-5">
          <h1 className="display-3 font-weight-bold">404</h1>
          <h2 className="font-weight-bold">page not found</h2>
          <h3>
            The requested URL{' '}
            <span className="text-danger">{props.location.pathname}</span> was
            not found
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Default;
