import { useContext } from "react";
import { PageCtx } from "../../context/PageContext";

function Logout(){

    const ctx = useContext(PageCtx)

    
    function logoutHandler(){
        ctx.logoutHandler()
    }

    return(
        <>
            <button onClick={logoutHandler}>Logout</button>
        </>
    )
}
export default Logout;