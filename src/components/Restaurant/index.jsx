import styles from "./Restaurant.module.css"

import RestaurantBottom from "../RestaurantBottom"
import RestaurantCenter from "../RestaurantCenter/index.jsx"
import { RestaurantObj, RestaurantObj2, RestaurantObj3, RestaurantObj4 } from "../../data/data.js"


function Restaurant() {
    return (
        <div className={styles.container}>
            
            <RestaurantBottom props={RestaurantObj}/>
            <RestaurantCenter props={RestaurantObj3}/>
            <RestaurantBottom props={RestaurantObj2}/>
            <RestaurantCenter props={RestaurantObj4}/>
        </div>
    )
}

export default Restaurant
