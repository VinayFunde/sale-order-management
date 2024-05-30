// OrderModal.js
import React from 'react';
import Modal from '@mui/material/Modal';
import OrderForm from './OrderForm';

const OrderModal = ({ order, readOnly = false, onClose }) => {
  const [currentOrder, setCurrentOrder] = React.useState(order || { customer: '', amount: '' });

  const handleChange = (field, value) => {
    setCurrentOrder({ ...currentOrder, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the order
    onClose();
  };

  return (
    <Modal open onClose={onClose}>
      <div>
        <OrderForm
          order={currentOrder}
          readOnly={readOnly}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </Modal>
  );
};

export default OrderModal;