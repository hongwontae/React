import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";

export default function Meal() {
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function fetchGetMeal() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        return <p>Response.OK fail</p>
      }

      const meals = await response.json();
      setLoading(meals);
    }
    fetchGetMeal();
  }, []);

  return (
    <ul id="meals">
      {loading.map((ele, idx, arr) => {
        return <MealItem key={ele.id} meal={ele}></MealItem>
      })}
    </ul>
  );
}
