import { useState } from "react";

const TimeApp = () => {

    const [time, setTime] =useState(1);

    const handleClick = () => {
        setTime(time+1);
    }

    return ( 
        <div>
        <span>현재 시각 : {time}시</span>
        <button onClick={handleClick}>button</button>
        </div>
     );
}
 
export default TimeApp;