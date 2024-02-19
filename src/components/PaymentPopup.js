import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import React, { useState } from 'react';

const PaymentPopup = ({ totalPrice, itemCount, onClose, onConfirmOrder }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleConfirmOrder = () => {
    if (selectedPaymentMethod === 'Cash on Delivery') {
      onConfirmOrder();
    }
  };

  return (
    <Popup open onClose={onClose}>
      <div className="payment-popup">
        <h2>Select Payment Method</h2>
        <div className="payment-methods">
          <label>
            <input
              type="radio"
              value="Card"
              checked={selectedPaymentMethod === 'Card'}
              onChange={handlePaymentMethodChange}
              disabled
            />
            Card
          </label>
          {/* Add similar labels for other payment methods */}
        </div>
        <p>Order Summary:</p>
        <p>Total Items: {itemCount}</p>
        <p>Total Price: {totalPrice}</p>
        <button onClick={handleConfirmOrder} disabled={selectedPaymentMethod !== 'Cash on Delivery'}>
          Confirm Order
        </button>
      </div>
    </Popup>
  );
};

export default PaymentPopup;