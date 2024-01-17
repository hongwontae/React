import { useState } from "react";
import { createContext } from "react";

export const changeContext = createContext({
    change : '',
    clickTrueHandler : ()=>{},
    clickNotHandler : ()=>{}
})

const ChangeRootContext = ({children})=>{

    const [change, setChange] = useState('Good Data');

    function clickTrueHandler() {
      setChange('True Data')
    }
    function clickNotHandler(){
      setChange('False Data')
    }

    const crcValue = {
        change : change,
        clickNotHandler,
        clickTrueHandler
    }

    return (
        <changeContext.Provider value={crcValue}>
            {children}
        </changeContext.Provider>
    )


    
}   

export default ChangeRootContext