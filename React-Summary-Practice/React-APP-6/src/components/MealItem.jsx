import {currencyFormatter} from '../util/formatting'

import Button from './UI/Button'



function MealItem({meal}) {
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
            <Button className="meal-item-actions">
                Add to Cart
            </Button>
          </p>
        </article>
      </li>
    </>
  );
}

export default MealItem;
