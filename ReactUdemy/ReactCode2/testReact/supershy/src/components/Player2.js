import { useContext } from "react"
import { changeContext } from "../store/store"


export default function Player2(){
    console.log('context Change? player2')


    const {clickNotHandler} = useContext(changeContext)

    

    return(
        <div>{1+1+1+1}</div>
    )
}