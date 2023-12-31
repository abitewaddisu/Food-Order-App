import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'
import style from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.09
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german speciality!',
        price: 16.5
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99
    }
]

function AvailableMeals() {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} {...meal} />)

    return <section className={style.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
}

export default AvailableMeals