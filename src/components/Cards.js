import { RES_IMAGE } from "../utility/hard-code";
import { removeItems } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Cards = ({cart, quantity, setQuantity, handleIncrement}) => {

    // const [quantity,setQuantity] = useState(1);

    console.log(cart);

    const {name,imageId,price,defaultPrice,id}= cart.card.info;

    // const handleIncrement = () => {
    //     setQuantity(quantity => quantity + 1);
    // }

    // const handleDecrement = () => {
    //     setQuantity(quantity => quantity - 1);
    // }

    const dispatch = useDispatch();

    const handleRemoveItem = (cartId) => {
        console.log("Remove cart",cart);
        dispatch(removeItems(cartId));
    }

    const quantityAmount = (price ? price/100 : defaultPrice/100) * quantity;

    return(
        <div className="flex gap-4 items-center mb-2 border-b-2 pb-2">
           {imageId &&  
            <div className="w-[100px] h-[100px]">
                <img src={RES_IMAGE +imageId} alt={name} className="w-full h-full object-cover"/>
            </div>}
            <div className="flex-1">
                <h1>{name}</h1>
                <h5>&#8377; {price ? price/100 : defaultPrice/100}</h5>
            </div>
            <div className="flex-1 ">
                <button className="bg-gray-200 px-2 py-1 cursor-pointer hover:bg-gray-300" onClick={()=>handleIncrement(id)}>+</button>
                <span className="px-2 py-1">{quantity}</span>
                <button className="bg-gray-200 px-2 py-1 cursor-pointer hover:bg-gray-300">-</button>
            </div>
            <div className="flex-1">
                <h6 className="font-bold text-lg ">&#8377;{quantityAmount}</h6>
            </div>
            <div>
                <button className="bg-red-600 text-white cursor-pointer px-2 py-1 hover:bg-red-700" onClick={()=>handleRemoveItem(id)}>Remove</button>
            </div>
        </div>
    )
}

export default Cards;
