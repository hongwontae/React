function Header(){

    let a = Math.random().toFixed(1)*10;
    


    return(
        <>
            <header>
                <h1>Hello World</h1>
                <div>{a}</div>
            </header>
        </>
    )
}

export default Header