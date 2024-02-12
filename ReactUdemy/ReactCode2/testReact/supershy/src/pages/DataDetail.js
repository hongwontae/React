import { Link } from "react-router-dom"

function DataDetail({data1}){

    return(
        <div>
            <ul>
                {data1.map((ele, idx, arr)=>{
                    return <li key={ele.id}><Link to={`${ele.id}`}>{ele.title}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default DataDetail

