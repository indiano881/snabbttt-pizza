import styles from "./OrderPage.module.css"
import {pizzaData} from "../../data/data"
import Card from "../Card"
import OrderBar from "../OrderBar"


function OrderPage() {
    return (
        <>
        < OrderBar />
        <div className={styles.container}>
            {pizzaData.map((pizza, index)=> <Card key={index} {...pizza} />)}
        </div>
        </>
    )
}

export default OrderPage
