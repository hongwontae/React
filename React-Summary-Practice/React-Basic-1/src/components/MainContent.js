function MainContent({text, onChange}){



    return(
        <main>
            <div>Hello!</div>
            <div>{text}</div>
            <button onClick={()=>{onChange('Good Boy!')}}>This is Console.log Button</button>
        </main>
    )
}

export default MainContent;