let a = [1,2];
console.log(a);

const DivChange = (props)=>{


    return(
        <>
        <button onClick={props.handler}>{props.children}</button>
        </>
    )
}

export default DivChange;