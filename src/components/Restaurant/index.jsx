import styles from "./Restaurant.module.css"
import {getImageURL} from "../../utils/functions.js"


function Restaurant({props}) {
    return (
        <div className={styles.container}>
            <img  className={styles.image} src={getImageURL(props.image1)} alt={props.name} width={"200px"} height={"auto"}/>
            <h2>{props.name}</h2>
            <h4>{props.adress}</h4>
            <h4>{props.phone}</h4>
            <img className={styles.image} src={getImageURL(props.image2)} alt={props.name} width={"200px"} height={"auto"}/>
        </div>
    )
}

export default Restaurant
