import { takeEvery } from 'redux-saga/effects';
import { Status, actionTypes as openTenderActionTypes } from 'brandibble-redux';
import { onAddLineItem } from 'state/sagas/orderSagas.js';

const { FULFILLED } = Status;
const { ADD_LINE_ITEM } = openTenderActionTypes;

export default function*() {
  yield takeEvery(`${ADD_LINE_ITEM}_${FULFILLED}`, onAddLineItem);
}
