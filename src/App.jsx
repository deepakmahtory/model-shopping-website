import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import NavBar from "./Components/NavBar"


const App=()=>{
  return (
    <>
    
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
       
    </Routes>
   
    </>
  )
}
export default App