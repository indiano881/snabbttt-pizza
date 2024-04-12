import styles from "./Navigation.module.css"
import { NavLink } from "react-router-dom"



function Navigation() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="order">Order</NavLink>
        </nav>
    )
}

export default Navigation
