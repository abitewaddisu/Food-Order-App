import React from 'react'
import style from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={style.input}>
            <label >
                {props.label}
                <input ref={ref} {...props.input} />
            </label>
        </div>
    )
})

export default Input