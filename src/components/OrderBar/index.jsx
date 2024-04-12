import styles from './OrderBar.module.css'

const OrderBar = ({totalPrice, totalPizzas}) => {

    
    return (
        <div className={styles.orderBar}>
            <h4>Your ordered {totalPizzas} pizzas for an amount of {totalPrice} SEK</h4>
            <p className={styles.button} >SEND ORDER</p>
        </div>
    )
}

export default OrderBar
