/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router";
import PlayResultContainer from "../../components/play-result/play-result-container/PlayResultContainer";
import { useEffect } from "react";
import Pagination from "../../components/play-result/Pagination";

function PlayResultPage(){

    const data = useLoaderData();

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])

    return(
        <>
            <PlayResultContainer allData={data.items}></PlayResultContainer>
            <Pagination totalPage={data.totalPages}></Pagination>
            
        </>
    )
}

export default PlayResultPage;

export async function prLoader({request, params}) {

    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1;

    const response = await fetch(`http://localhost:5000/get/prall?page=${page}`);

    if(!response.ok){
        throw new Error('Failed Data');
    }

    const resData = await response.json();


    return resData;
  }