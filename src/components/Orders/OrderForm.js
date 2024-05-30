// OrderForm.js
import React from 'react';

const OrderForm = ({ order, readOnly, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Customer:
        <input
          type="text"
          value={order.customer}
          onChange={(e) => onChange('customer', e.target.value)}
          readOnly={readOnly}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={order.amount}
          onChange={(e) => onChange('amount', e.target.value)}
          readOnly={readOnly}
        />
      </label>
      {!readOnly && <button type="submit">Save</button>}
    </form>
  );
};

export default OrderForm;