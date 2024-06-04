import { useLoaderData } from "react-router-dom";
import axios from 'axios'

function TestPage() {

    const data = useLoaderData();
    console.log(data);

  return (
    <>
      <h1>Test Page</h1>
      <p>{data}</p>
    </>
  );
}

export default TestPage;

export async function loader() {
    try {
        const response = await axios.get('http://localhost:3000/player/test');
        const data = response.data
        return data
      } catch (error) {
        error.message = 'fetch data가 실패했습니다'
        throw error;
      }
  
}
