export async function fetchfunc(){
    const data = await fetch("http://localhost:3000/places");
    const resData = await data.json();

    if (!data.ok) {
      throw new Error("Failed to data");
    }
    return resData
}

export async function updateUserPlaces(places){
  const response = await fetch('http://localhost:3000/user-places', {
    method : 'PUT',
    body : JSON.stringify({places : places}),
    headers : {
      'ContentType' : 'application/json'
    }
  });

  const resData = await response.json();

  if(!response.ok){
    throw new Error('Somthing wrong')
  }

  return resData.message;


}