import { useState } from "react";

const DateChange = () => {

 let [date,setDate] = useState(['1월', '2월', '3월']);

    function changeDate() {
        setDate(['4월','6월','8월'])
    }


    return ( 
        <div>
            <h1>기념 리스트</h1>
            <div>{date[0]}</div>
            <div>{date[1]}</div>
            <div>{date[2]}</div>
            <button onClick={changeDate}>Button</button>
        </div>
     );
}
 
export default DateChange;