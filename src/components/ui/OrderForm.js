import React from 'react';

const OrderForm = props => (
   <form className="OrderForm" onSubmit={props.submit}>
    <input type="text" className="body-input" placeholder="Order text..." />
    <button type="button" className="submit-btn">Order!</button>
  </form>
);

export default OrderForm;
