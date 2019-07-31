import React, { useState } from 'react';

import {
  depositIcxEvent,
  depositTokenEvent,
  withdrawIcxEvent,
  withdrawTokenEvent,
} from '../../../utils/event';

import { wrapper } from './BalanceInput.scss';
import { primary, danger } from '../../Layout/style.scss';

const BalanceForm = ({ address, type, token }) => {
  const [amount, setAmount] = useState('');

  const handleInputChange = e => {
    if (!address) {
      return;
    }
    setAmount(e.target.value);
  };

  const handleSubmit = ({ keyCode }) => {
    if (!address) {
      return;
    }
    if (!keyCode || (keyCode && keyCode === 13)) {
      if (!amount) {
        alert('Please enter amount!');
        return;
      }
      if (isNaN(amount)) {
        alert('Only numbers can be enterd.');
        setAmount('');
        return;
      }
      eventDispatch();
      setAmount('');
    }
  };

  const eventDispatch = () => {
    if (type === 'Deposit') {
      if (token !== 'ICX') {
        depositTokenEvent(amount, address, token.address);
      } else {
        console.log(type, token, address);
        depositIcxEvent(amount, address);
      }
    } else {
      if (token !== 'ICX') {
        withdrawTokenEvent(amount, address, token.address);
      } else {
        withdrawIcxEvent(amount, address);
      }
    }
  };

  return (
    <div className={wrapper}>
      <p>
        {type} {token !== 'ICX' ? token && token.symbol : token}
      </p>
      <input type='text' value={amount} onChange={handleInputChange} onKeyDown={handleSubmit} />
      <button className={type === 'Deposit' ? primary : danger} onClick={handleSubmit}>
        {type}
      </button>
    </div>
  );
};

export default BalanceForm;
