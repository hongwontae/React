import { useState } from "react";

const DateChange = () => {

 let [date,setDate] = useState(['1월', '2월', '3월']);

    function changeDate() {
        // date[0] = '2월' // 이렇게 접근하면 기존의 요소가 1월 3000일이 된다.
        // console.log(date) // => 0번째 요소가 1월 3000일이 된다. 나머지 값은 그대로
        // setDate(date) // 리렌더링 자체가 안된다. => 기존과 신규의 값이 같아서

        // date[0] = '1월 20일'
        // setDate([...date]) // 이렇게 되면 값은 변하긴 하는데 배열의 값도 바뀐다.

        // 기존의 배열을 유지하고 change하는 방식이 좋다.
        let copy = [...date]
        copy[0] = '10월 22일'
        setDate(copy)

    }




    return ( 
        <div>
            <h1>기념 리스트</h1>
            <p>{date[0]}</p>
            <p>{date[1]}</p>
            <p>{date[2]}</p>
            <button onClick={changeDate}>Button</button>
        </div>
     );
}
 
export default DateChange;