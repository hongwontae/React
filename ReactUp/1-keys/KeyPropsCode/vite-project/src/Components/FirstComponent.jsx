function FirstComponent({onSet}){

    function handleClickChange(){
        onSet(1000);
    }


    return(
        <>
            <div>First Components</div>
            <button onClick={handleClickChange}>ChangeButton</button>

        </>
    )
}

export default FirstComponent;