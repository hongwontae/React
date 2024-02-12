import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import DataDetail from './DataDetail'

function DataExpress(){

  const data = useRouteLoaderData('dataId');
  console.log(data);


    return(
      <DataDetail data1={data}></DataDetail>
    )
}

export default DataExpress;

export async function loader(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return data;
}