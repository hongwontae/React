import {currencyFormatter} from '../util/formatting'

import {useContext} from 'react'
import {MealContext} from '../store/MealContext'

import Button from './UI/Button'



function MealItem({meal}) {

  const {addMeal} = useContext(MealContext);

  

  return (
    <>
      <li className="meal-item">
        <article>
          <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}></img>
          <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-prcie">
                {currencyFormatter.format(meal.price)}
                </p>
            <p className="meal-item-description">{meal.description}</p>
          </div>
          <p className="meal-item-actions">
            <Button onClick={()=>addMeal(meal)} className="meal-item-actions">
                Add to Cart
            </Button>
          </p>
        </article>
      </li>
    </>
  );
}

export default MealItem;
