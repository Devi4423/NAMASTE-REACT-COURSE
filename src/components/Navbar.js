import { LOGO_URL } from "../utility/hard-code";

const Navbar = () => {
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
                </ul>
            </div>
        </header>
    )
}

export default Navbar;