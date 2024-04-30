import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp.js";
import Error from './Error.jsx'

const requestConfig = {};

export default function Meals() {
  const {
    data: loading,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);


  if(isLoading){
    return <p className="center">Fetching meals...</p>
  }
  if(error){
    return <Error title="Failed to fetch melas" messeage='fail'></Error>
  }

  return (
    <ul id="meals">
      {loading.map((ele, idx, arr) => {
        return <MealItem key={ele.id} meal={ele}></MealItem>;
      })}
    </ul>
  );
}
