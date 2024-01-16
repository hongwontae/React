import {useEffect} from 'react';

const Player = ({trueChange, falseChange, clickData}) => {

  useEffect(()=>{
    console.log('useEffect 본문')
    return ()=>{
      console.log('Clean UP')
    }
  },[clickData])


  return (
    <>
    <button onClick={trueChange}>TrueChange</button>
    <button onClick={falseChange}>FlaseChange</button>
    <div>{clickData}</div>
    </>
  );
};

export default Player;
