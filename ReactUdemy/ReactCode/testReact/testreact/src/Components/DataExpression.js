
const DataExpression = ({data})=>{
    
    console.log(data)

    return(
        <div>
            <ul>
                <li>{data[0].name}</li>
                <li>{data[1].name}</li>
                <li>{data[2].name}</li>
                <li>{data[3].name}</li>
                <li>{data[4].name}</li>
            </ul>
        </div>
    )
}

export default DataExpression;