import { takeEvery, put } from 'redux-saga/effects';
import { Status, actionTypes as openTenderActionTypes } from 'brandibble-redux';

const { FULFILLED } = Status;
const { ADD_LINE_ITEM } = openTenderActionTypes;

const testSaga = function*(action) {
  console.log(action);
  yield put({ type: 'DING_DING' });
};

export default function*() {
  yield takeEvery(`${ADD_LINE_ITEM}_${FULFILLED}`, testSaga);
}
