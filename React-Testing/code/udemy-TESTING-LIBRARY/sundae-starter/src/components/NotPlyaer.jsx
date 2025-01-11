import axios from 'axios';
import { useEffect, useState } from "react";

function NotPlayer(){

    const [notP, setNotP] = useState([]);
    console.log(notP)

    useEffect(()=>{
        axios.get('http://localhost:3030/not/player').then((result)=>{
            setNotP(result.data);
        }).catch(err=>{
            console.log(err)
        })
    }, [])

    return(
        <>
            <div>
                {notP && notP.map((ele)=>{
                    return <div role='document' key={ele.id}>{ele.name} { '-' } {ele.position}</div>
                })}
            </div>
        </>
    )
}

export default NotPlayer;