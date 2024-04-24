import {useState, createContext} from 'react';

export const CheckTwoContext = createContext({
    rootData : '',
    checkContext: ()=>{},
});

export default function CheckContextProvider({children}){
    const [rootData, setRootData] = useState('ROOT DATA');

    function checkContext(){
        setRootData('Hello-Friend')
      }

      const ctxCT = {
        rootData,
        checkContext
      };

      return(
        <CheckTwoContext.Provider value={ctxCT}>{children}</CheckTwoContext.Provider>
      )
}