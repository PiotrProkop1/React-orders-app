import React from 'react';

import OrderForm from '../ui/OrderForm';

class Order extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(data) {
    // todo
  }

  render() {
    return (
      <div className="Order">
        <OrderForm submit={submit} />
      </div>
    );
  }
}

export default Order;
