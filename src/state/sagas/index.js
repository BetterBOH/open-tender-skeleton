import { takeEvery, put } from 'redux-saga/effects';
import { Status, actionTypes as openTenderActionTypes } from 'brandibble-redux';
import { ADD_ITEM } from 'state/actions/orderActions';
import { onAddLineItem } from 'state/sagas/orderSagas.js';

const { FULFILLED } = Status;

export default function*() {
  yield takeEvery(`${ADD_ITEM}_${FULFILLED}`, onAddLineItem);
}
