import styles from "./Card.module.css"
import {getImageURL} from "../../utils/functions"


const Card = ({name, image, ingredients, price}) => {
    return (
        <div className={styles.card}>
            <img src={getImageURL(image)} alt={name} />
            <h2>{name}</h2>
            <h4>{ingredients}</h4>
            <h4>{price}</h4>
            
        </div>
    )
};

export default Card




