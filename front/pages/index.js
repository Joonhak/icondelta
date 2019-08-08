import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Balance from '../components/Balance';
import OrderBook from '../components/OrderBook';
import TokenBar from '../components/TokenBar';
import Trade from '../components/Trade';
import History from '../components/History';

import AT from '../redux/actionTypes';
import { socket } from '../redux/api/config';
import { addIconexEventListner, removeIconexEventListner, eventHandler } from '../utils/event';

const Home = ({ symbol }) => {
  const { address } = useSelector(state => state.wallet);
  const { sockets } = useSelector(state => state.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = eventHandler(dispatch);
    addIconexEventListner(handler);
    return () => removeIconexEventListner(handler);
  }, []);

  const loadWalletData = () => {
    if (address) {
      dispatch({
        type: AT.LOAD_WALLET_BALANCE_REQEUST,
        address,
        symbol,
      });
    } else {
      dispatch({
        type: AT.LOAD_ADDRESS_REQUEST,
      });
    }
  };

  useEffect(() => {
    loadWalletData();

    dispatch({
      type: AT.SET_SOCKET,
      data: socket(symbol),
    });
    return () => {
      console.log(sockets);
      if (sockets) {
        const { order, trade } = sockets;
        order.close();
        trade.close();
        dispatch({
          type: AT.REMOVE_SOCKET,
        });
        console.log('socket disconnected');
      }
    };
  }, [symbol]);

  useEffect(() => {
    if (sockets) {
      const { order, trade } = sockets;
      order.emit('order_event', { event: 'getOrders', params: { offset: 0, count: 10 } }, res => {
        console.log('get orders', res);
        dispatch({
          type: AT.ORDER_LIST_RECEIVED,
          data: res,
        });
      });

      trade.emit('trade_event', { event: 'getLatestTokenTrades', params: {} }, res => {
        console.log('get last trades of each token', res);
        dispatch({
          type: AT.LAST_TRADE_RECEIVED,
          data: res,
        });
      });
    }
  }, [sockets]);

  useEffect(() => {
    if (address && sockets) {
      const { order, trade } = sockets;
      order.emit(
        'order_event',
        {
          event: 'getOrdersByAddress',
          params: { address, offset: 0, count: 10 },
        },
        res => {
          console.log('get orders by address', res);
          dispatch({
            type: AT.MY_ORDER_LIST_RECEIVED,
            data: res,
          });
        }
      );

      trade.emit(
        'trade_event',
        { event: 'getTradesByAddress', params: { address, symbol, offset: 0, count: 10 } },
        res => {
          console.log('get trades by address', res);
          dispatch({
            type: AT.MY_TRADE_LIST_RECEIVED,
            data: res,
          });
        }
      );
    }
  }, [address, sockets]);

  return (
    <main>
      <Balance symbol={symbol} />
      <OrderBook symbol={symbol} />
      <TokenBar symbol={symbol} />
      <Trade />
      <History symbol={symbol} />
    </main>
  );
};

Home.getInitialProps = async context => {
  const store = context.store;
  const symbol = context.query.symbol;
  store.dispatch({
    type: AT.LOAD_TOKEN_LIST_REQUEST,
    symbol,
  });

  return { symbol };
};

export default Home;
