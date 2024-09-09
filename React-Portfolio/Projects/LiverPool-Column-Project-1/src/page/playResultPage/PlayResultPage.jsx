/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router";
import PlayResultContainer from "../../components/play-result/play-result-container/PlayResultContainer";
import { useEffect } from "react";

function PlayResultPage(){

    const data = useLoaderData();

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])

    return(
        <>
            <PlayResultContainer allData={data}></PlayResultContainer>
        </>
    )
}

export default PlayResultPage;

export async function prLoader({request, params}) {
    const response = await fetch('http://localhost:5000/get/prall');

    if(!response.ok){
        throw new Error('Failed Data');
    }

    const resData = await response.json();


    return resData;
  }