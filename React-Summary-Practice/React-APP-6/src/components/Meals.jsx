import { useEffect, useState } from "react";
import MealItem from "./MealItem";

function Meals() {
  const [mealData, setMealData] = useState([]);

  useEffect(() => {
    async function mealGetHttpfunction() {
      const response = await fetch("http://localhost:3000/meals");
      const data = await response.json();
      setMealData(data);
    }

    mealGetHttpfunction();
  }, []);

  return (
    <>
      <ul id="meals">
        {mealData.map((data) => {
          return <MealItem key={data.id} meal={data}></MealItem>;
        })}
      </ul>
    </>
  );
}

export default Meals;
