import styles from "./OrderPage.module.css"
import {pizzaData} from "../../data/data"
import Card from "../Card"
import OrderBar from "../OrderBar"
import Shopping from "../Shopping"
import { useState } from "react"


function OrderPage() {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalPizzas, setTotalPizzas] = useState(0);
    const [isShoppingButtonPressed, setShoppingButton] = useState(false)
    const closeBtn = () => {
        setShoppingButton(false)
    }

    return (
        <>
        < OrderBar totalPrice={totalPrice} totalPizzas={totalPizzas} isShoppingButtonPressed={isShoppingButtonPressed} setShoppingButton={setShoppingButton}/>
        <div className={styles.container}>
            {pizzaData.map((pizza, index)=> <Card 
            key={index} 
            {...pizza} 
            totalPrice={totalPrice} 
            setTotalPrice={setTotalPrice}
            totalPizzas={totalPizzas}
            setTotalPizzas={setTotalPizzas}
            
            />)}
            {console.log("totsl price is" + totalPrice)}
            {console.log("totsl PIZZAS is" + totalPizzas)}
            {console.log(isShoppingButtonPressed)}
            
            {isShoppingButtonPressed && <Shopping 
            isOpen={isShoppingButtonPressed} 
            onClose={closeBtn}
            totalPizzas={totalPizzas}
            totalPrice={totalPrice}/>}
        </div>
        </>
    )
}

export default OrderPage
