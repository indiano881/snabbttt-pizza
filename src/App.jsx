import { Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={"hello world"}/>
        <Route path="order" element={"order"}/>
      </Routes>
    </>
  )
}

export default App
