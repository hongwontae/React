import { useQuery } from "@tanstack/react-query";
import {fetchGetHistory} from '../../util/http'

function HistoryList(){

    const {data, isPending, isError, error} = useQuery({
        queryKey : ['history'],
        queryFn : ({signal})=>{
            return fetchGetHistory({signal})
        }
    });

    console.log(data);

    let content;

    if(isPending){
        content = <p>Pending...</p>
    }

    if(isError){
        content = <>
            <p>Error</p>
            <p>{error.message}</p>
        </>
    }

    if(data){
        content = <p>{data.title}</p>
    }

    


    return(
        <>
        <h1>Hello</h1>
            {content}
        </>
    )
}
export default HistoryList;