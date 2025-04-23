// userSlice.js
const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const FETCH_USER = 'user/FETCH_USER';
export const FETCH_USER_SUCCESS = 'user/FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'user/FETCH_USER_FAILURE';

export const fetchUser = (id) => ({ type: FETCH_USER, payload: id });

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, loading: true, error: null };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}