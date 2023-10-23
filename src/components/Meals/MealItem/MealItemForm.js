import { useRef, useState } from 'react'
import Input from '../../UI/Input'
import style from './MealItemForm.module.css'

function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
    
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmount > 5) {
            setAmountIsValid(false)
            return
        }
        props.onAddToCart(enteredAmountNumber)
    }

    // const cartContext = useContext(CartContext);

    return (
        <form className={style.form}>
            <Input ref={amountInputRef} type="text" label='Amount' input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button onClick={submitHandler}>+ Add</button>
            {!amountIsValid && <p>Please Enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm