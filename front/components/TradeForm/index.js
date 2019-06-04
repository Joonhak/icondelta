import React, { memo, useState, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Menu, InputNumber, Input } from 'antd';

import { toCurrency } from '../../utils/formatter';
import { getAddressEvent, sendOrderEvent } from '../../utils/events';
import { generateJsonRpcId } from '../../utils/jsonrpc';
import { BUY_ORDER_REQUEST, SELL_ORDER_REQUEST } from '../../reducers/order';

export default memo(() => {
  const [tradeType, setTradeType] = useState('buy');
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  const [total, setTotal] = useState();

  const { address } = useSelector(state => state.iconex);
  const { selectedToken } = useSelector(state => state.tokens);
  const { sellingOrders, buyingOrders } = useSelector(state => state.order);
  const dispatch = useDispatch();
  const icxAddress = useRef('cx0000000000000000000000000000000000000000');

  const applyOrder = useCallback(
    e => {
      e.preventDefault();

      if (!_checkAddress()) return;

      if (!price || !amount) {
        alert('fields cannot be blank');
      }

      const genId = generateJsonRpcId();

      let matchOrder;

      if (tradeType === 'buy') {
        matchOrder = sellingOrders.filter(
          o =>
            toIcx(o.get_amount / o.give_amount) === price &&
            toIcx(o.get_amount - o.order_fill) >= amount
        );
      } else {
        matchOrder = buyingOrders.filter(
          o =>
            toIcx(o.giveAmount / o.getAmount) === price &&
            toIcx(o.giveAmount - o.order_fill) >= amount
        );
      }

      if (matchOrder.length) {
        // trade logic
        return;
      }

      let actionName;
      let tokenGet, getAmount;
      let tokenGive, giveAmount;

      if (tradeType === 'buy') {
        tokenGet = selectedToken.address;
        getAmount = amount;
        tokenGive = icxAddress.current;
        giveAmount = total;
        actionName = BUY_ORDER_REQUEST;
      } else {
        tokenGet = icxAddress.current;
        getAmount = total;
        tokenGive = selectedToken.address;
        giveAmount = amount;
        actionName = SELL_ORDER_REQUEST;
      }

      window.dispatchEvent(
        sendOrderEvent(
          genId,
          address,
          tokenGet,
          getAmount,
          tokenGive,
          giveAmount
        )
      );

      dispatch({
        type: actionName,
        id: genId,
      });
    },
    [price, amount, total]
  );

  const handleMenuClick = useCallback(
    e => {
      setTradeType(e.key);
      setAmount(null);
      setPrice(null);
      setTotal(null);
    },
    [tradeType]
  );

  const changePrice = useCallback(
    e => {
      if (!_checkAddress()) return;
      setPrice(e.target.value);
      if (amount) {
        setTotal(e.target.value * amount);
      }
    },
    [price, amount, address]
  );

  const changeAmount = useCallback(
    e => {
      if (!_checkAddress()) return;
      setAmount(e.target.value);
      if (price) {
        setTotal(price * e.target.value);
      }
    },
    [price, amount, address]
  );

  const _checkAddress = () => {
    if (!address) {
      window.dispatchEvent(getAddressEvent());
      return false;
    }
    return true;
  };

  return (
    <>
      <Menu
        style={{ marginBottom: '10px' }}
        mode='horizontal'
        onClick={handleMenuClick}
        defaultSelectedKeys={['buy']}
      >
        <Menu.Item key='buy' style={{ width: '50%' }}>
          Buy
        </Menu.Item>
        <Menu.Item key='sell' style={{ width: '50%' }}>
          Sell
        </Menu.Item>
      </Menu>
      <Form onSubmit={applyOrder}>
        <Input
          type='number'
          style={{ margin: '10px 0', width: '100%' }}
          placeholder={`Price ( ${selectedToken.symbol}/ICX )`}
          min={0}
          value={price}
          onChange={changePrice}
        />
        <Input
          style={{ margin: '10px 0', width: '100%' }}
          placeholder='Amount to buy'
          min={0}
          value={amount}
          onChange={changeAmount}
        />
        <InputNumber
          readOnly
          formatter={toCurrency}
          style={{ margin: '10px 0', width: '100%' }}
          placeholder='Total'
          min={0}
          value={total}
        />
        <Button
          htmlType='submit'
          style={{ margin: '10px 0' }}
          type={tradeType === 'buy' ? 'primary' : 'danger'}
          icon={tradeType === 'buy' ? 'download' : 'upload'}
          block
        >
          {tradeType.toUpperCase()}
        </Button>
      </Form>
    </>
  );
});
