import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from './userSlice';

function fetchUserApi() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => res.json());
}

function* fetchUserWorker() {
  try {
    const user = yield call(fetchUserApi);
    yield put(fetchUserSuccess(user));
  } catch (e) {
    yield put(fetchUserFailure(e.message));
  }
}

export function* userSaga() {
  yield takeLatest(fetchUserRequest.type, fetchUserWorker);
}