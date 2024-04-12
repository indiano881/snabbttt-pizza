import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import "./global.css"





function App() {
  

  return (
    <>
    <Header />
    <Navigation />
      <Routes>
        <Route path="/" element={"hello world"}/>
        <Route path="order" element={"order"}/>
      </Routes>
    </>
  )
}

export default App
