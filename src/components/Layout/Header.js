import HeaderCartButton from './HeaderCartButton'
import style from './Header.module.css'
import foods from '../../assets/foods.png'

function Header(props) {
    return (
        <>
            <header className={style.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton {...props} />
            </header>
            <div className={style['main-image']}>
                <img src={foods} alt="A table full of delicious food" />
            </div>
        </>
    )
}

export default Header