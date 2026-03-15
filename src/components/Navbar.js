import { LOGO_URL } from "../utility/hard-code";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [btnName,setBtnName] = useState("Login")
    // let btnName= "Login"
    return(
        <header className="header-section">
            <div className="logo-img">
                <img alt="logo" src={LOGO_URL}/>
            </div>
            <div className="logo-content">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <button className="login-btn" 
                        onClick={()=>{

                            //conditional Rendering
                            setBtnName(btnName == "Login" ? "Logout" : "Login")
                        }
                        }>{btnName}</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;