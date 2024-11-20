import { useState } from "react";
import { useLoaderData } from "react-router";

function HomePage(){

    const loaderData = useLoaderData();
    const [data, setData] = useState([...loaderData.start]);

    function setHandler(){
        setData((prev)=>{
            const copyData = [...prev];
            const ccData = copyData.map((ele)=>{
                return {
                    ...ele,
                    playerName : ele.playerName + 'HWT'
                }
            })
            return ccData
        })
    }

    return(
        <>
            {data.map(ele=>{
                return <div key={ele.pId}>{ele.playerName}</div>
            })}
            <button className="border-[1px] border-black p-2" onClick={setHandler}>Hello</button>
        </>
    )
}

export default HomePage;

