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

