import styles from "./Restaurant.module.css"

import RestaurantBottom from "../RestaurantBottom"
import { RestaurantObj, RestaurantObj2 } from "../../data/data.js"


function Restaurant() {
    return (
        <div className={styles.container}>
            
            <RestaurantBottom props={RestaurantObj}/>
            <RestaurantBottom props={RestaurantObj2}/>
            
        </div>
    )
}

export default Restaurant
