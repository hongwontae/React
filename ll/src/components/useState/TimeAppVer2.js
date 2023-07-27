import { useState } from "react";

const TimeAppVer2 = () => {

    const [time, setTime] = useState(1);

    const handleClick = () => {
        let newTime;
        if(time>=12){
            newTime=1;
        } else{
            newTime =time+1;
        }
        setTime(newTime);
    }; // newTime의 값만 취한다. setTime은 무조건 time의 상태값을 바꿔줘 리렌더링을 일으킨다.

    return ( 
        <div>
            <div>현재 시각은 {time}시 입니다.</div>
            <div onClick={handleClick}>button</div>
        </div>
     );
}
 
export default TimeAppVer2;