import { useQuery } from "@tanstack/react-query";

function MatchDescription(){

    useQuery({
        queryKey : ['events'],
        queryFn : ()=>{
            console.log('matchDesc')
        }
    })

    return(
        <>
            <h1>Match Description</h1>
        </>
    )
}

export default MatchDescription;