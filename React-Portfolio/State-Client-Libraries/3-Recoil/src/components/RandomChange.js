import {atom, useRecoilState} from 'recoil'

function RandomChange(){

    const textDefault = atom({
        key : `cr`,
        default : 'Hello World'
    });

    const[text, setTetxt] = useRecoilState(textDefault);

    function changeRamdom(){
        let num = Math.random().toFixed(2);
        setTetxt(num)
    }
    


    return(
        <>
            <div>
                <div>{text}</div>
                <button onClick={changeRamdom}>Click Me</button>
            </div>
        </>
    )
}

export default RandomChange;