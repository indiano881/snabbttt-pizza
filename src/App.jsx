import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import "./global.css"
import Restaurant from "./components/Restaurant"
import { RestaurantObj } from "./data/data"
import OrderPage from "./components/OrderPage"



function App() {
  

  return (
    <>
    <Header />
    <Navigation />
      <Routes>
        <Route path="/" element={<Restaurant props={RestaurantObj} />}/>
        <Route path="order" element={<OrderPage />}/>
      </Routes>
    </>
  )
}

export default App
