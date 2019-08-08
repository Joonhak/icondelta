export default {
  // Depend on only front state
  SET_SOCKET: 'SET_SOCKET',
  REMOVE_SOCKET: 'REMOVE_SOCKET',

  SET_CURRENT_TOKEN: 'SET_CURRENT_TOKEN',
  SET_CURRENT_TOKEN_SYMBOL: 'SET_CURRENT_TOKEN_SYMBOL',

  SET_TOKEN_PRICE: 'SET_TOKEN_PRICE',

  SAVE_TEMPORAL_ORDER: 'SAVE_TEMPORAL_ORDER',
  REMOVE_TEMPORAL_ORDER: 'REMOVE_TEMPORAL_ORDER',

  // ICONEX request
  JSON_RPC_REQUEST: 'JSON_RPC_REQUEST',

  // Request to ICONEX
  LOAD_ADDRESS_REQUEST: 'LOAD_ADDRESS_REQUEST',
  LOAD_ADDRESS_SUCCESS: 'LOAD_ADDRESS_SUCCESS',
  REQUEST_SIGNING: 'REQUEST_SIGNING',
  REQUEST_TRADE: 'REQUEST_TRADE',

  // ICONEX response
  RESPONSE_ADDRESS: 'RESPONSE_ADDRESS',
  RESPONSE_SIGNING: 'RESPONSE_SIGNING',
  RESPONSE_JSON_RPC: 'RESPONSE_JSON-RPC',
  ICONEX_RELAY_RESPONSE: 'ICONEX_RELAY_RESPONSE',

  // Request to icon network
  LOAD_WALLET_BALANCE_REQEUST: 'LOAD_WALLET_BALANCE_REQEUST',
  LOAD_WALLET_BALANCE_SUCCESS: 'LOAD_WALLET_BALANCE_SUCCESS',
  LOAD_WALLET_BALANCE_FAILURE: 'LOAD_WALLET_BALANCE_FAILURE',

  LOAD_ICX_BALANCE_FAILURE: 'LOAD_ICX_BALANCE_FAILURE',
  LOAD_TOKEN_BALANCE_FAILURE: 'LOAD_TOKEN_BALANCE_FAILURE',

  // Request to server
  LOAD_TOKEN_LIST_REQUEST: 'LOAD_TOKEN_LIST_REQUEST',
  LOAD_TOKEN_LIST_SUCCESS: 'LOAD_TOKEN_LIST_SUCCESS',
  LOAD_TOKEN_LIST_FAILURE: 'LOAD_TOKEN_LIST_FAILURE',

  // Request to server with websocket
  ORDER_REQUEST: 'ORDER_REQUEST',
  CHECK_TRADE_REQUEST: 'CHECK_TRADE_REQUEST',

  // After socket request
  LAST_TRADE_RECEIVED: 'LAST_TRADE_RECEIVED',

  TRADE_LIST_RECEIVED: 'LOAD_TRADE_LIST_RECEIVED',

  MY_ORDER_LIST_RECEIVED: 'MY_ORDER_LIST_RECEIVED',
  MY_TRADE_LIST_RECEIVED: 'MY_TRADE_LIST_RECEIVED',

  // Receive from socket
  NEW_ORDER_RECEIVED: 'NEW_ORDER_RECEIVED',
  MY_NEW_ORDER_RECEIVED: 'MY_NEW_ORDER_RECEIVED',
  MY_NEW_TRADE_RECEIVED: 'MY_NEW_TRADE_RECEIVED',

  // Send transaction types
  DEPOSIT_ICX_REQUEST: 'DEPOSIT_ICX_REQUEST',
  DEPOSIT_ICX_SUCCESS: 'DEPOSIT_ICX_SUCCESS',

  DEPOSIT_TOKEN_REQUEST: 'DEPOSIT_TOKEN_REQUEST',
  DEPOSIT_TOKEN_SUCCESS: 'DEPOSIT_TOKEN_SUCCESS',

  WITHDRAW_ICX_REQUEST: 'WITHDRAW_ICX_REQUEST',
  WITHDRAW_ICX_SUCCESS: 'WITHDRAW_ICX_SUCCESS',

  WITHDRAW_TOKEN_REQUEST: 'WITHDRAW_TOKEN_REQUEST',
  WITHDRAW_TOKEN_SUCCESS: 'WITHDRAW_TOKEN_SUCCESS',

  // TBD: Change server api websocket to http endpoint
  LOAD_LAST_TRADE_BY_TOKEN_REQUEST: 'LOAD_LAST_TRADE_BY_TOKEN_REQUEST',
  LOAD_LAST_TRADE_BY_TOKEN_SUCCESS: 'LOAD_LAST_TRADE_BY_TOKEN_SUCCESS',
  LOAD_LAST_TRADE_BY_TOKEN_FAILURE: 'LOAD_LAST_TRADE_BY_TOKEN_FAILURE',

  LOAD_ORDER_LIST_REQUEST: 'LOAD_ORDER_LIST_REQUEST',
  LOAD_ORDER_LIST_SUCCESS: 'LOAD_ORDER_LIST_SUCCESS',
  LOAD_ORDER_LIST_FAILURE: 'LOAD_ORDER_LIST_FAILURE',

  LOAD_ORDER_LIST_BY_ADDRESS_REQUEST: 'LOAD_ORDER_LIST_BY_ADDRESS_REQUEST',
  LOAD_ORDER_LIST_BY_ADDRESS_SUCCESS: 'LOAD_ORDER_LIST_BY_ADDRESS_SUCCESS',
  LOAD_ORDER_LIST_BY_ADDRESS_FAILURE: 'LOAD_ORDER_LIST_BY_ADDRESS_FAILURE',

  LOAD_TRADE_LIST_BY_ADDRESS_REQUEST: 'LOAD_TRADE_LIST_BY_ADDRESS_REQUEST',
  LOAD_TRADE_LIST_BY_ADDRESS_SUCCESS: 'LOAD_TRADE_LIST_BY_ADDRESS_SUCCESS',
  LOAD_TRADE_LIST_BY_ADDRESS_FAILURE: 'LOAD_TRADE_LIST_BY_ADDRESS_FAILURE',
};
