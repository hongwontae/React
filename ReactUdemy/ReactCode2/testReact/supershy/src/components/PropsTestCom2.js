const PropsTestCom2 = (props)=>{

    console.log(props)


    return(
        <>
        <h3>{props[0].title}</h3>
        <p>{props[0].description}</p>
        </>
    )
}

export default PropsTestCom2;