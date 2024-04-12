import styles from "./OrderPage.module.css"
import {pizzaData} from "../../data/data"
import Card from "../Card"


function OrderPage() {
    return (
        <div className={styles.container}>
            {pizzaData.map((pizza, index)=> <Card key={index} {...pizza} />)}
        </div>
    )
}

export default OrderPage
