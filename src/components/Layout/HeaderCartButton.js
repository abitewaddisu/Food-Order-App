import { useContext, useEffect, useState } from 'react'
import CartIcon from '../../assets/cart-icon.png'
import style from './HeaderCartButton.module.css'
import CartContext from '../../state/CartContext'

function HeaderCartButton(props) {
    const cartContext = useContext(CartContext)
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    
    const { items } = cartContext;

    const reducer = (total, item) => total += item.amount
    const numberOfCards = items.reduce(reducer, 0);

    const btnClasses = `${style.button} ${btnIsHighlighted && style.bump}`
    useEffect(() => {
        if (items.length > 0) {
            setBtnIsHighlighted(true)
        }
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return <button className={btnClasses} onClick={props.onShowCart}>
        <span className={style.icon}>
            <img src={CartIcon} alt="cart icon" />
        </span>
        <span>
            Your Cart
        </span>
        <span className={style.badge}>
            {numberOfCards}
        </span>
    </button>
}

export default HeaderCartButton
