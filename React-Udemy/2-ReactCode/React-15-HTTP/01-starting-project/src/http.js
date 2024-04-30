export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Fail to fetch places");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
    const data = await fetch('http://localhost:3000/user-places', {
        method : 'PUT',
        body : JSON.stringify({places}),
        headers : {
            'Content-Type' : 'application/json'
        }
    })

    const resData = await data.json();

    if(!data.ok){
        throw new Error('Fial to read data Sorry')
    }

    return resData.message
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Fail to fetch user places");
  }

  return resData.places;
}