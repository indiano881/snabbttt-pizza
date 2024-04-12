import styles from './RestaurantCenter.module.css'
import {getImageURL} from "../../utils/functions.js"

const RestaurantCenter = ({props}) => {
    return (
        <>
          
            <div>
            <h4>{props.content1}</h4>
            <h4>{props.content2}</h4>
            </div>
            <img  className={styles.image} src={getImageURL(props.image)} alt={props.name} width={"200px"} height={"auto"}/>
            
        </>
    )
};

export default RestaurantCenter
