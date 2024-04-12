import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import "./global.css"





function App() {
  

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={"hello world"}/>
        <Route path="order" element={"order"}/>
      </Routes>
    </>
  )
}

export default App
