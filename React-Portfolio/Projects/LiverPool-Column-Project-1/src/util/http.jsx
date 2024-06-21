/* eslint-disable no-unused-vars */
export async function formationPostQuery(data){
    console.log(data)
    const {excludePlayer, excludeSubPlayer, excludeButtons} = data;
    const formationPostFetch = await fetch('http://localhost:4000/for/formationPost', {
        method : 'POST',
        headers : {
            "Content-Type": "application/json",
        },
        body : JSON.stringify([excludePlayer, excludeSubPlayer, excludeButtons])
    })
    if(!formationPostFetch.ok){
        throw new Error('Post Fail')
    }

    const resData = await formationPostFetch.json();
    console.log(resData)

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

export async function test(){
    const response = await fetch('http://localhost:4000/aaa');
    const data = await response.json();
    return data
}