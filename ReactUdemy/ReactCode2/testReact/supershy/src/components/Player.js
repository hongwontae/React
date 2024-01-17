import { useContext } from 'react';
import {useEffect} from 'react';

import {changeContext} from '../store/store'
const Player = () => {

  const {change, clickNotHandler, clickTrueHandler} = useContext(changeContext);

  useEffect(()=>{
    console.log('useEffect 본문')
    return ()=>{
      console.log('Clean UP')
    }
  },[change])


  return (
    <>
    <button onClick={clickTrueHandler}>TrueChange</button>
    <button onClick={clickNotHandler}>FlaseChange</button>
    <div>{change}</div>
    </>
  );
};

export default Player;
