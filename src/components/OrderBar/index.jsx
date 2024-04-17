import styles from './OrderBar.module.css'
import {getImageURL} from "../../utils/functions"

const OrderBar = ({totalPrice, totalPizzas}) => {

    
    return (
        <div className={styles.orderBar}>
            <h4>Your ordered {totalPizzas} pizzas for an amount of {totalPrice} SEK</h4>
            
            <img className={styles.button} src={getImageURL("shopping-cart.png")} alt="shopping cart" width="50px" height="50px"/>
        </div>
    )
}

export default OrderBar
