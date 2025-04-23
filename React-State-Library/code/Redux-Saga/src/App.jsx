import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUser} from './user/userSlice';

function App() {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser(3));
  }, [dispatch]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error}</p>;

  return (
    <div style={{ padding: '2rem' }}>
      {<div>이름 : {data?.name}</div>}
    </div>
  );
}

export default App;