// In the parent component
import React, { useState } from 'react';
import Paypal from './Paypal';

function App() {
  const [amount, setAmount] = useState(10.00); // Set a default amount

  return (
    <div>
      <h1>Checkout</h1>
      <Paypal amount={amount} />
    </div>
  );
}

export default App;
