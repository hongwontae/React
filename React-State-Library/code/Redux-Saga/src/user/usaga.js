// userSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './userSlice';

// API 호출 함수
const fetchUserApi = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
    res.json()
  );

// worker saga
function* fetchUserWorker(action) {
  try {
    const data = yield call(fetchUserApi, action.payload); // API 호출
    yield put({ type: FETCH_USER_SUCCESS, payload: data }); // 성공 액션 dispatch
  } catch (err) {
    yield put({ type: FETCH_USER_FAILURE, payload: err.message }); // 실패 액션 dispatch
  }
}

// watcher saga
export function* userSaga() {
  yield takeLatest(FETCH_USER, fetchUserWorker); // 최신 요청만 처리
}