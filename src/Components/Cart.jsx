import { useDispatch, useSelector } from "react-redux";
import aa from "./fakestore.module.css";
import { minus, plus, remove } from "../Redux/CartSlice";


const Cart = () => {
  const dispatch = useDispatch();
  
  const { items, totalPrice, noItems } = useSelector((state) => state.data);
  

  let removeHandler = (id) => {
    dispatch(remove(id));
  };
//   if(items.length===0){
    // totalPrice
//   }

   let incre=()=>{
    dispatch(plus())
   }

   let decre=()=>{
    dispatch(minus())
   }

   


  return (
    <div>
      <h2>Cart</h2>
      <div className={aa.mainC}>
        {items.map((item) => (
          <div className={aa.cItems} key={item.id}>
            <img src={item.image} alt="" srcSet="" id={aa.cimage} />
            <h5>{item.title}</h5>
            <h5>Price : {item.price}</h5>
            <button onClick={incre}>+</button>
            <button onClick={decre}>-</button>
            <button id={aa.rbtn} onClick={() => removeHandler(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

       <div className={aa.msg}>
        <h2>{noItems}</h2>
       </div>
      <div className={aa.ttp}>
      <div className={aa.tp}>
        <button onClick={()=>{alert("Your Order Successfully Placed")}}>Total Price: {totalPrice}</button>
       </div>
      </div>
      
      
      
    </div>
  );
};

export default Cart;
