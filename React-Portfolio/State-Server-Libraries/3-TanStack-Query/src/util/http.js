import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

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

export async function fetchTest({ signal }) {
  const response = await axios("http://localhost:3000/", { signal });
  const data = await response.data;
  return data;
}

