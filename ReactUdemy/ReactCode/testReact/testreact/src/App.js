import react, { useReducer } from "react";

import Test from '../src/Components/Test';
import { AuthContext } from "./Context/auth-context";



function App() {

  



  return (
    <react.Fragment>
      <AuthContext.Provider value={{
        name : 'hwt',
        age: 3000
      }}>
      <Test></Test>
      </AuthContext.Provider>
    
    </react.Fragment>
  );
}

export default App;
