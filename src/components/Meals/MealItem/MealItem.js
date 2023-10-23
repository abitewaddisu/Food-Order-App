import { useContext } from 'react'
import style from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../state/CartContext'

function MealItem(props) {
    const cartContext = useContext(CartContext);
    const price = `ETB ${props.price.toFixed(2)}`

    const addToCartHandler = amount => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li className={style.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={style.description}>{props.description}</div>
                <div className={style.price}>{price}</div>
            </div>
            <div>
                <MealItemForm item={props} onAddToCart={addToCartHandler}  />
            </div>
        </li>
    )
}

export default MealItem