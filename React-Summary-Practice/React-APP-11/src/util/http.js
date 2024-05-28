/* eslint-disable no-unused-vars */
export async function fetchEvents(searchParameter){

  let url = 'http://localhost:3000/events'

  if(searchParameter){
    url += '?search=' + searchParameter
  }

    const response = await fetch(url);

    if (!response.ok) {
      const error = new Error('An error occurred while fetching the events');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }

    const { events } = await response.json();

    return events;
}