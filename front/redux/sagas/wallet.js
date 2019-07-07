import { all, fork, put, call, takeLatest } from 'redux-saga/effects';

import AT from '../actionTypes';
import { requestAddress, loadBalances } from '../../utils/event';
import storage from '../../utils/storage';

export default function*() {
  yield all([
    fork(watchLoadAddressRequest),
    fork(watchLoadTokenBalanceRequest),
  ]);
}

function* watchLoadAddressRequest() {
  yield takeLatest(AT.LOAD_ADDRESS_REQUEST, loadAddress);
}

function* loadAddress() {
  const address = yield storage.get('address');
  if (address) {
    yield put({
      type: AT.LOAD_ADDRESS_SUCCESS,
      address,
    });
  } else {
    requestAddress();
  }
}

function* watchLoadTokenBalanceRequest() {
  yield takeLatest(AT.LOAD_BALANCE_REQUEST, loadTokenBalance);
}

function* loadTokenBalance({ token, address }) {
  const eventIds = loadBalances(token, address);
  console.log(eventIds);
}
