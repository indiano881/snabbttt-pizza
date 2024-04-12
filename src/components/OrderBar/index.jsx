import styles from './OrderBar.module.css'

const OrderBar = () => {
    return (
        <div className={styles.orderBar}>
            <h4>Your orderer 12 pizzas for an amount of </h4>
            <p className={styles.button}>pay</p>
        </div>
    )
}

export default OrderBar
