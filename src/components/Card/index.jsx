import styles from "./Card.module.css"
import {getImageURL} from "../../utils/functions"
import {useState} from "react"


const Card = ({name, image, ingredients, price, amountAvaible, totalPrice, setTotalPrice, totalPizzas,setTotalPizzas}) => {
const [amountPizza, setAmountPizza] = useState(0);
const [isPizzaFinish, setPizzaFinish] = useState(false)

const addPizza= () => {
    if (amountPizza>=amountAvaible-1) {
        setPizzaFinish(true)
    }
    if (!isPizzaFinish) {
        setAmountPizza(pizza=> pizza+1)
        setTotalPizzas(totalPizzas=> totalPizzas+1)
        setTotalPrice(totalPrice=> totalPrice+ price )
    }
}

const removePizza = () => {
    if (amountPizza<=amountAvaible) {
        setPizzaFinish(false)
    }
        if (amountPizza===0) {
            return
        } else {
            setAmountPizza(pizza=>pizza-1)
            setTotalPizzas(totalPizzas=> totalPizzas-1)
            setTotalPrice(totalPrice=> totalPrice- price )
        }
}

    return (
        <div className={styles.card}>
            <img className={!isPizzaFinish ? styles.imagePizza: styles.imageGrey} src={getImageURL(image)} alt={name} />
            <h2 className={styles.pizzaName}>{name}</h2>
            <h4 className={styles.ingredients}>{ingredients}</h4>
            <h4 className={styles.price}>{price} SEK</h4>
            <h4>Available: {amountAvaible-amountPizza } Ordered pizzas: { amountPizza}</h4>
            <div className={styles.buttonContainer}>
                <p className={styles.button} onClick={removePizza}>-</p>
                <p className={styles.button} onClick={addPizza}>+</p>
            </div>
            
            {console.log(amountPizza)}
            
        </div>
    )
};

export default Card




