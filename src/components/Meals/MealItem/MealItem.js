import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = 
  const AddToCartHandler = (amount) => {
    
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={AddToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;