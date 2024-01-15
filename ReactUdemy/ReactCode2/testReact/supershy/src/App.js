import { useReducer} from 'react';

import Button from "./components/Button";
import Player from "./components/Player";


function reducerDisptach(state, action) {
   if(action.type === 'Change_item'){
    const updateItem = [...state.items]
    const currentData = updateItem.filter((ele, idx, arr)=>{
      return ele.id !== action.payload
    })
    return {
      ...state,
      name : 'koala3121'
    }
   }
   if(action.type === 'Delete_item'){
    return;
   }
}


function App() {

  const [stateRe, dispatchRe] = useReducer(reducerDisptach, {
    items : [{
      name : 'hwt',
      age : 27,
      id : 0
    },{
      name : 'Anji',
      age : 27,
      id : 1
    },{
      name : 'lsy',
      age : 27,
      id : 2
    },{
      name : 'kys',
      age : 27,
      id : 3
    }]
  });

  const changeState = (id)=>{
    dispatchRe({
      type : 'Change_item',
      payload : id
    })
  }

  const deleteState = (id)=>{
    dispatchRe({
      type : 'Delete_item',
      payload : id
    })
  }


  return (
    <>
      <Player data={stateRe} onChangeState={changeState}></Player>
      <Button>Button</Button>
    </>
  );
}

export default App;
