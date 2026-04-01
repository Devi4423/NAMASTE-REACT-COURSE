import { LOGO_URL } from "../utility/hard-code";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utility/UserContext";

const Navbar = () => {
    const [btnName,setBtnName] = useState("Login")
    // let btnName= "Login"

    const {loggedInUser} = useContext(UserContext);

    return(
        <header className="flex justify-between items-center py-4 px-8 bg-brown shadow-xl">
            <div>
                <img alt="logo" src={LOGO_URL} className="w-14"/>
            </div>
            <div className="logo-content">
                <ul className="flex">
                    <li className="mx-5 ">
                        <Link to="/" className="text-xl hover:bg-orange-800 hover:text-white px-2.5 py-1 rounded-sm">Home</Link>
                    </li>
                    <li className="mx-5">
                        <Link to="/about" className="text-xl hover:bg-orange-800 hover:text-white px-2.5 py-1 rounded-sm">About Us</Link>
                    </li>
                    <li className="mx-5">
                        <Link to="/contact" className="text-xl hover:bg-orange-800 hover:text-white px-2.5 py-1 rounded-sm">Contact Us</Link>
                    </li>
                    <li className="mx-5">
                        <Link to="/grocery" className="text-xl hover:bg-orange-800 hover:text-white px-2.5 py-1 rounded-sm">Grocery</Link>
                    </li>
                    <li className="mx-5">
                        <Link to="/cart" className="text-xl hover:bg-orange-800 hover:text-white px-2.5 py-1 rounded-sm">Cart</Link>
                    </li>
                    <li className="mx-5">
                        <button className="text-xl bg-gray-400 text-white px-2 py-1 hover:bg-gray-600 hover:text-white rounded-sm" 
                        onClick={()=>{

                            //conditional Rendering
                            setBtnName(btnName == "Login" ? "Logout" : "Login")
                        }
                        }>{btnName}</button>
                    </li>
                    <li className="mx-5">
                        <Link to="/cart" className="text-xl hover:bg-orange-800 hover:text-white px-2.5 py-1 rounded-sm font-bold">
                            {loggedInUser}
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;