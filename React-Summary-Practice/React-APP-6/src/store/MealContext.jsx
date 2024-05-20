import { createContext, useReducer } from "react";

export const MealContext = createContext({
  meals: [],
  addMeal: (meal) => {},
  removeMeal: (id) => {},
});

function mealReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const exsitingMealIndex = state.meals.findIndex((meal) => {
      return meal.id === action.meal.id;
    });

    const updateItems = [...state.meals];

    if (exsitingMealIndex > -1) {
      const data = state.meals[exsitingMealIndex];
      const updateItem = {
        ...data,
        quantity: data.quantity + 1,
      };
      updateItems[exsitingMealIndex] = updateItem;
    } else {
      updateItems.push({
        ...action.meal, // 기존에 존재하지 않았던 거니까 action.meal로 넣어줘야하고 quantity를 1로 설정해야 한다.
        quantity: 1,
      });
    }
    return {
      meals: updateItems, // 완벽히 다른 값으로 교체해버린다.
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const exisitingMealIndex = state.meals.findIndex((meal) => {
      return meal.id === action.id;
    });

    const updateItems = [...state.meals];

    if (exisitingMealIndex === 1) {
      updateItems.splice(exisitingMealIndex, 1);
    } else {
      const data = state.meals[exisitingMealIndex];
      const updateRemoveItem = {
        ...data,
        quantity: data.quantity - 1,
      };
      updateItems[exisitingMealIndex] = updateRemoveItem;
    }
    return {
      meals: updateItems,
    };
  }
  return state;
}

export default function MealContextProvider({ children }) {
  const [initialValue, dispatch] = useReducer(mealReducer, {
    meals: [],
  });

  function addMeal(meal) {
    dispatch({ type: "ADD_ITEM", meal: meal });
  }

  function removeMeal(id) {
    dispatch({ type: "REMOVE_ITEM", id: id });
  }

  let mealCtx = {
    meals: initialValue.meals,
    addMeal,
    removeMeal,
  };


  return (
    <>
      <MealContext.Provider value={mealCtx}>{children}</MealContext.Provider>
    </>
  );
}
