import { all } from 'redux-saga/effects';
import { userSaga } from '../user/usaga';

export default function* rootSaga() {
  yield all([userSaga()]);
}