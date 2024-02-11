import { Link } from "react-router-dom"
import aa from "./fakestore.module.css"
import { useSelector } from "react-redux"




const NavBar=()=>{
  
    const count=useSelector((e)=> e.data.items)


    return(
        <div className={aa.nav}>
            
    
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
             <span id={aa.count}> Items : {count.length}</span>
            
        </div>
    )
}
export default NavBar