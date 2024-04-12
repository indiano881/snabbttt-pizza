import styles from "./Card.module.css"
import {getImageURL} from "../../utils/functions"
import {useState} from "react"


const Card = ({name, image, ingredients, price, amountAvaible}) => {
const [amountPizza, setAmountPizza] = useState(0);
const [isPizzaFinish, setPizzaFinish] = useState(false)

const addPizza= () => {
    if (amountPizza>=amountAvaible-1) {
        setPizzaFinish(true)
    }


    setAmountPizza(pizza=> pizza+1)
}

const removePizza = () => {
    if (amountPizza<=amountAvaible) {
        setPizzaFinish(false)
    }



        if (amountPizza===0) {
            return
        } else {
            setAmountPizza(pizza=>pizza-1)
        }
    
}

    return (
        <div className={styles.card}>
            <img className={!isPizzaFinish ? styles.imagePizza: styles.imageGrey} src={getImageURL(image)} alt={name} />
            <h2>{name}</h2>
            <h4>{ingredients}</h4>
            <h4>{price} SEK</h4>
            <h4>Pizzasavailable: {(amountAvaible-amountPizza)>=0 ? amountAvaible-amountPizza : "OUT OF STOCK"} Order pizzas are: {amountAvaible>=amountPizza ? amountPizza: "ORDER EXCEED QUANTITY AVAILABLKE"}</h4>
            <p className={styles.button} onClick={addPizza}>+</p>
            <p className={styles.button} onClick={removePizza}>-</p>
            {console.log(amountPizza)}
            
        </div>
    )
};

export default Card




