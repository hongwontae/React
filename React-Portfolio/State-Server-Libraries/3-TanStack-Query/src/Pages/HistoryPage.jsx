/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { fetchTest } from "../util/http";

function HistoryPage(){

    const {data, isPending, isError, error} = useQuery({
        queryKey : ['testing'],
        queryFn : ({signal})=>{
           return  fetchTest({signal})
        }
    })

    
    let content;

    if(isPending){
        content = <p>로딩중입니다. 잠시만 기다려주세요</p>
    }

    if(isError){
        content = <p>{error.message || '실패'}</p>
    }

    if(data){
        content = <p>{data}</p>
    }


    return(
        <>
            <h1>History</h1>
            <div>
                {content}
            </div>

        </>
    )
}

export default HistoryPage;