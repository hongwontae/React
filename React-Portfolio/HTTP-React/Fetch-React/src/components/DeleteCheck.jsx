/* eslint-disable react/prop-types */
function DeleteCheck({data}){


    return(
        <>
        <p style={{marginTop : 40, marginBottom : 25} }>Delete Data Number!</p>
            {data.map((ele, index)=>{
                return <div key={index}>{ele}</div>
            })}
        </>
    )
}

export default DeleteCheck;