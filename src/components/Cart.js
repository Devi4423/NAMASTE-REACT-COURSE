import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import Cards from "./Cards";
import { useState } from "react";

const Cart = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [quantity,setQuantity] = useState(1);

  const cartItems = useSelector((store)=> store.cart.items);
  // console.log(cartItems)

  const gotoRestaurants = () => {
    navigate("/");
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const handleIncremet = (id) => {
    cartItems.map((item)=> item.card.info.id === id ? setQuantity(quantity => quantity + 1): quantity)
  }

  return cartItems.length === 0 ? 
    <div className="w-6/12 mx-auto flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-4xl text-gray-700 mb-2.5">Your Cart is Empty</h1>
      <p className="text-gray-400 text-base mb-2.5">You can go to home page to view more restaurants</p>
      <button className="bg-orange-500 text-white rounded-xl px-4 py-2 cursor-pointer hover:bg-orange-600 font-bold" onClick={gotoRestaurants}>See restaurants near you</button>
    </div> :
    <div className="w-6/12 m-auto">
      <div className="flex justify-between items-center my-8" >
        <h1 className="text-4xl font-bold ">Cart</h1>
        <button className="bg-orange-900 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-orange-700 text-sm" onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div>
        {cartItems.map((cart)=>(
          <Cards key={cart.card.info.id} cart={cart} quantity={quantity} setQuantity={setQuantity} handleIncrement = {handleIncremet}/>
        ))}
      </div>
      <div>
        <h4></h4>
      </div>
    </div>
}
export default Cart;