export const initialState = {
  orderHistory: [
    {
      id: 1,
      useAddress: 'user wallet address',
      symbol: 'DAI',
      address: 'token Address',
      type: 'ask',
      price: 0.5,
      amount: 2,
      total: 1,
      createdAt: new Date().toLocaleString(),
    },
    {
      id: 2,
      userAddress: 'user wallet address',
      symbol: 'DAI',
      address: 'token Address',
      type: 'bid',
      price: 0.49,
      amount: 20,
      total: 0.98,
      createdAt: new Date().toLocaleString(),
    },
  ],
  tradeHistory: [
    {
      id: 1,
      userAddress: 'user wallet address',
      symbol: 'DAI',
      type: 'bid',
      price: 0.5,
      amount: 2,
      total: 1,
      createdAt: new Date().toLocaleString(),
    },
  ],
};

export const LOAD_TOKEN_HISTORY_REQUEST = 'HISTORY/LOAD_TOKEN_HISTORY_REQUEST';
export const LOAD_TOKEN_HISTORY_SUCCESS = 'HISTORY/LOAD_TOKEN_HISTORY_SUCCESS';
export const LOAD_TOKEN_HISTORY_FAILURE = 'HISTORY/LOAD_TOKEN_HISTORY_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
