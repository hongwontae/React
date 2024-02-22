function ThirdCom({data}){

    console.log(data)

    return(
        <>
        <div>
            Real Data
        </div>
        <ul>
            {data.map((ele)=>{
                return <li key={ele.id}>{ele.name} and age = {ele.age}</li>
            })}
        </ul>
        
        </>
    )
}

export default ThirdCom