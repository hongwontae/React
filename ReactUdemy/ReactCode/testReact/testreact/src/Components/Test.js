import { useContext } from "react";
import { AuthContext } from "../Context/auth-context";

const Test = ()=>{

    const ctx = useContext(AuthContext)
    
    return (
        <div>
            {ctx.name}
        </div>
    )
}

export default Test;