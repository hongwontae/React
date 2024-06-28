/* eslint-disable no-unused-vars */
export async function formationPostQuery(data) {
  const { startingPlayer, sub } = data;
  const formationPostFetch = await fetch(
    "http://localhost:4000/for/formationPost",
    {
      method: "POST",
      headers: {  
        "Content-Type": "application/json",
      },
      body: JSON.stringify([startingPlayer, sub]),
    }
  );
  if (!formationPostFetch.ok) {
    throw new Error("Post Fail");
  }

  const resData = await formationPostFetch.json();
  return resData
}

export async function buttonPostQuery(data){
    const {butData} = data;
    console.log(butData)
    const response = await fetch('http://localhost:4000/but/register', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify([butData])
    });
    if(!response.ok){
        throw new Error('ButtonPost Fail');
    }

    const resData = await response.json();
    console.log(resData)

}

export async function formationGetOne({ signal, identi }) {
  const url = `http://localhost:4000/for/formationGet?num=${identi}`;

  const formationOneFetch = await fetch(url, { signal });

  if (!formationOneFetch.ok) {
    throw new Error("Error get 발생");
  }

  const data = formationOneFetch.json();
  return data;
}

export async function buttonAllGet({ signal }) {
  console.log('buttonAll get')
  const response = await fetch("http://localhost:4000/but/getAll", {
    signal,
  });
  if (!response.ok) {
    throw new Error("Error 발생");
  }
  const resData = await response.json();
  return resData
}

export async function dataDelete(num){
  const url = `http://localhost:4000/for/dele?data=${num}`
  const response = await fetch(url, {
    method : 'DELETE'
  });
  if(!response.ok){
    throw new Error('Error 발생 했습니다.')
  }

  const resData = await response.json();
  console.log(resData)
  return resData


}
