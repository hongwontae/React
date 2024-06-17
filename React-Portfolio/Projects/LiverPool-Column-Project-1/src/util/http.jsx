/* eslint-disable no-unused-vars */
export async function formationPostQuery(data){
    const {player, subPlayer} = data;
    const formationPostFetch = await fetch('http://localhost:4000/for/formationPost', {
        method : 'POST',
        headers : {
            "Content-Type": "application/json",
        },
        body : JSON.stringify([player, subPlayer])
    })
    if(!formationPostFetch.ok){
        throw new Error('Post Fail')
    }

}

export async function formationGetOne({signal, identi}){

    const url = `http://localhost:4000/for/formationGet?num=${identi}`

    const formationOneFetch = await fetch(url, {signal});

    if(!formationOneFetch.ok){
        throw new Error('Error get 발생')
    }

    const data = formationOneFetch.json()
    return data;

}