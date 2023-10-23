import { useContext } from 'react'
import CartItem from './CartItem'
import Modal from '../UI/Modal'
import style from './Cart.module.css'
import CartContext from '../../state/CartContext'

function Cart(props) {
    const cartContext = useContext(CartContext);

    const totalAmount = `ETB ${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items.length > 0

    const cartItemAddHandler = item => {
        cartContext.addItem({...item, amount: 1})
    }
    const cartItemRemoveHandler = id => {
        cartContext.removeItem(id)
    }

    const cartItems = <ul className={style['cart-items']}>
        {
            cartContext.items.map(item => <CartItem key={item.id} {...item} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)} />)
        }
    </ul>
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={style.total}>
               <span>Total Amount</span>
               <span>{totalAmount}</span>
            </div>
            <div className={style.actions}>
               <button className={style['button--alt']} onClick={props.onClose}>Close</button>
               {hasItems && <button className={style.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart