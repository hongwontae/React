import { createContext, useState } from "react";

export const CheckContext = createContext({
    check : 0,
    addItem : (item)=>{}
});

export default function CheckContextProvider({children}){

    const [check, setCheck] = useState(0)

    function addItem(item){
        setCheck(item)
    }

    let checkCtx = {
        check,
        addItem
    }

    return(
        <CheckContext.Provider value={checkCtx}>{children}</CheckContext.Provider>
    )
}
