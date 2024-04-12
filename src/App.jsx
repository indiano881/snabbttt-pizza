import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import "./global.css"
import Restaurant from "./components/Restaurant"
import OrderPage from "./components/OrderPage"
import Footer from "./components/Footer"


function App() {
  

  return (
    <>
    <Header />
    <Navigation />
      <Routes>
        <Route path="/" element={<Restaurant />}/>
        <Route path="order" element={<OrderPage />}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
