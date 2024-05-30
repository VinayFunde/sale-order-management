// CompletedOrders.js
import React from 'react';
import OrderModal from './OrderModal';

const CompletedOrders = () => {
  const [orders, setOrders] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentOrder, setCurrentOrder] = React.useState(null);

  const openModal = (order) => {
    setCurrentOrder(order);
    setIsModalOpen(true);
  };

  return (
    <div>
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
        <OrderModal order={currentOrder} readOnly={true} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default CompletedOrders;
