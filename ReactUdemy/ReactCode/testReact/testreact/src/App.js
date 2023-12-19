import react, { useState } from "react";

import Category from "./children/Category";


function App() {

  // const [id, setId] = useState('data');

  // const idChangeHandler = ()=>{
  //   setId('Good Data')
  //   console.log(id)
  // }

  const data = [
    {
      name: "hwt",
      age: 1000,
    },
    {
      name: "Jerrad",
      age: 2000,
    },
    {
      name: "Henderson",
      age: 3000,
    },
    {
      name: "dark",
      age: 4000,
    },
    {
      name: "matip",
      age: 5000,
    },
  ];

  return (
    <react.Fragment>
      {/* <Category>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
        <div>
          <div>good Game</div>
          <div>good Game</div>
        </div>
        <DataView dataView={data}></DataView>
      </Category>

      <AuthContext.Provider value={{
        isValid : 'goodBOy',
        idChangeHandler : idChangeHandler
      }}>
        <DataState></DataState>
        <div>{id}</div>
      </AuthContext.Provider> */}
  <Category className='koala3121'>
    <div>그만 하자구요</div>
  </Category>


    </react.Fragment>
  );
}

export default App;
