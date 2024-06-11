import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchGetPlayers({ signal }) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=1",
    { signal }
  );

  if (!response.ok) {
    const error = new Error("An error occurred during players fetching.");
    throw error;
  }

  const data = await response.json();

  return data;
}

export async function fetchPostTest(data) {
  const response = await fetch("http://localhost:3000/player/resister", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error가 발생했습니다.");
  }
}

export async function fetchGetTest({ signal }) {
  const response = await fetch("http://localhost:3000/player/showData", {
    signal,
  });

  console.log(response)

  if (!response.ok) {
    throw new Error("form data get not");
  }

  const data = await response.json();
  console.log(data);
  
  return data;
}

export async function fetchGetHistory({signal}){
  const response = await fetch('http://localhost:3000/history/showHistory', {signal});

  if(!response.ok){
    throw new Error('Error Message!')
  }

  const data = await response.json();
  return data;

}

export async function fetchPostHistory(data){
  const response = await fetch('http://localhost:3000/history/resister',{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(data)
  });
  

  if(!response.ok){
    throw new Error('??? 에러 발생 다크 이벤트 발생')
  }

}
