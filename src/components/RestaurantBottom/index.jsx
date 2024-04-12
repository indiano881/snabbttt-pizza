import styles from './RestaurantBottom.module.css'
import {getImageURL} from "../../utils/functions.js"

const RestaurantBottom = ({props}) => {
    return (
        <>
        <div className={styles.container}>
            <img  className={styles.image} src={getImageURL(props.image)} alt={props.name} width={"200px"} height={"auto"}/>
            <div className={styles.textContainer}>
                <h4>{props.content1}</h4>
                <h4>{props.content2}</h4>
            </div>
        </div>
        </>
    )
};

export default RestaurantBottom
