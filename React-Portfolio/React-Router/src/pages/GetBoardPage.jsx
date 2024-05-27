/* eslint-disable react-refresh/only-export-components */
import {json, useLoaderData} from 'react-router-dom'
import EventList from '../components/EventList';

/* eslint-disable no-unused-vars */
function GetBoardPage(){

    const data = useLoaderData();
    console.log(data);

    return(
        <>
            <EventList events={data}></EventList>
        </>
    )
}

export default GetBoardPage;


export async function getBoardLoader(){
    const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
        method : 'GET',
    });
    
    if(!response.ok){
        throw json({message : 'could not access data'}, {
            status : 500,
            statusText : 'getBoardLoader not'
        });
    }

    const data = response.json()
    return data;
}