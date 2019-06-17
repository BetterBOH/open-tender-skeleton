import { takeEvery, takeLatest } from 'redux-saga/effects';
import { Status, actionTypes as openTenderActionTypes } from 'brandibble-redux';
import {
  onAddLineItem,
  onHandleCartValidationErrors
} from 'state/sagas/orderSagas';
import { onAuthenticateUser } from 'state/sagas/authenticationSagas';
import { HANDLE_CART_VALIDATION_ERRORS } from 'state/actions/orderActions';

const { FULFILLED } = Status;
const { ADD_LINE_ITEM, AUTHENTICATE_USER } = openTenderActionTypes;

export default function*() {
  yield takeEvery(`${ADD_LINE_ITEM}_${FULFILLED}`, onAddLineItem);
  yield takeLatest(`${AUTHENTICATE_USER}_${FULFILLED}`, onAuthenticateUser);
  yield takeLatest(HANDLE_CART_VALIDATION_ERRORS, onHandleCartValidationErrors);
}
