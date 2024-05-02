import { useState } from "react";

function InputCal(){

    const [text, setText] = useState({
        name : '',
        age : 0
    });

    const [data, setData] = useState(''); 

    function saveNameHandler(name){
        setText((prevState)=>{
            return {
                ...prevState,
                name
            }
        })
    }

    function saveNumHandler(age){
        setText((prevState)=>{
            return {
                ...prevState,
                age
            }
        })
    }

    function buttonClickChangeHandler(){
         let {age, name} = {...text}
        console.log(text);
         let sum = `Hello my name is ${name} and My age is ${age}`;
         setData(sum);
    }


    return(
        <>
            <input type="text" onChange={(e)=>saveNameHandler(e.target.value)}></input>
            <input type="number" onChange={(e) => saveNumHandler(e.target.value)}></input>
            <button onClick={buttonClickChangeHandler}>Save!</button>
            <div>{data}</div>
        </>
    )
}

export default InputCal;