import { LOGO_URL } from "../utility/hard-code";
import { useState } from "react";

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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