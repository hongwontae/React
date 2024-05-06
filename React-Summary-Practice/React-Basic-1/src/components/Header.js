function Header(){

    let a = Math.random().toFixed(1)*10;

    function conso(){
        console.log(this);
    }
    


    return(
        <>
            <header>
                <h1>Hello World</h1>
                <div>{a}</div>
                <button onClick={conso}>Hello!</button>
            </header>
        </>
    )
}

export default Header