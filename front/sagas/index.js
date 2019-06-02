import { all, call } from 'redux-saga/effects';
import axios from 'axios';

import iconex from './iconex';

axios.defaults.baseURL = 'http://localhost:8000/api';

export default function* sagas() {
  yield all([call(iconex)]);
}
