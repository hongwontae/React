import { useQuery } from "@tanstack/react-query";
import {fetchGet} from '../util/FetchEvent'

function HomeDetail(){

    const {data} = useQuery({
        queryKey : ['HomeGet'],
        queryFn : ()=>{
            return  fetchGet();
        }
    })

    console.log(data);

    
    return(
        <div>

        </div>
    )
}

export default HomeDetail;