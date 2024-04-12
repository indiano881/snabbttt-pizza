import styles from "./OrderPage.module.css"
import {pizzaData} from "../../data/data"
import Card from "../Card"
import OrderBar from "../OrderBar"
import { useState } from "react"


function OrderPage() {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalPizzas, setTotalPizzas] = useState(0);

    return (
        <>
        < OrderBar totalPrice={totalPrice} totalPizzas={totalPizzas}/>
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
        </div>
        </>
    )
}

export default OrderPage
