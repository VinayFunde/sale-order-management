// ActiveOrders.js
import React, { useState } from 'react';
import OrderModal from './OrderModal';

const ActiveOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const openModal = (order) => {
    setCurrentOrder(order);
    setIsModalOpen(true);
  };

  return (
    <div>
      <button onClick={() => openModal(null)}>+ Sale Order</button>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.amount}</td>
              <td>
                <button onClick={() => openModal(order)}>...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <OrderModal order={currentOrder} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default ActiveOrders;