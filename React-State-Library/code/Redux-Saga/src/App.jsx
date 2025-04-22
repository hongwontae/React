import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from './user/userSlice';


function App() {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.user);

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={() => dispatch(fetchUserRequest())}>
        사용자 정보 불러오기
      </button>

      {loading && <p>로딩 중...</p>}
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;