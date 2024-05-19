import {createContext, useReducer} from 'react';

export const MealContext = createContext({
    meals : [],
    addItem : (meal)=>{},
    removeItem : (meal)=>{}
});

function reducerFunction(state, action){
    if(action.type === 'ADD_ITEM'){

        const existingMealIndex = state.meals.findIndex((ele)=>{
            return ele.id === action.meal.id
        });
        // state.meals는 배열이다.

        const updateMeals = [...state.meals];

        if(existingMealIndex > -1){
            const updateMeal = {
                ...state.meals[existingMealIndex],
                quantity : state.meals[existingMealIndex].quantity +1,
            }
            updateMeals[existingMealIndex] = updateMeal;
        } else {
            updateMeals.push({...action.meal, quantity : 1});
        }
        return {
            ...state, // 굳이 할 필요는 없다. => 안전하게 하려고
            meals : updateMeals
        }
    }

    if(action.type === 'REMOVE_ITEM'){
        const existingMealIndex = state.meals.findIndex((ele)=>{
            return ele.id === action.meal.id
        });

        const existingMeal = state.meals[existingMealIndex]

        const updateItems = [...state.meals];

        if( existingMeal === 1){
            updateItems.splice(existingMealIndex, 1);
        } else {
            const updateItem = {
                ...existingMeal,
                quantity : existingMeal.quantity+1
            };
            updateItems[existingMealIndex] = updateItem;
        }

    }

}




export default function mealContextProvider({children}){

    const [initalValue, dispatch] = useReducer(reducerFunction,{

    })

    return <MealContext.Provider>{children}</MealContext.Provider>
}



