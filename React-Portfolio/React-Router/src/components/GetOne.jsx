import {useLoaderData, json} from 'react-router-dom'
import GetOneExpression from './GetOneExpression';

function GetOne(){

    const data = useLoaderData();
    console.log(data);
    

    return(
        <>
            <h1>Get One!</h1>
            <GetOneExpression event={data}></GetOneExpression>
        </>
    )
}

export default GetOne;


export async function getOneLoader({params}){

    const param = params.getId;

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+param);

    if(!response.ok){
        throw json({message : 'getOneLoader http error'}, {
            status : 500
        })
    }
    const data = response.json();
    return data;
}