import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Body from './src/components/Body';

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return(
        <>
            <Navbar />
            <Body />
        </>
    )
}

    
root.render(<App />);





