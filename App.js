import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent2 = () => {
    return(
        <h1>Hello from Heading Component 2</h1>
    )
}

const heading = <h1 className="heading">Hello from JSX!</h1>

//function component = is normal javascript function have blocke of JSX code 
const HeadingComponent = () =>{
    const number = 10000
    return(
        <div>
            <h1>Hello from Heading Component!</h1>

            {/* Javascript Expression */}
            {heading}
            <h1>{number}</h1>
            <h1>{100*76-number}</h1>
            
            {/* Component Composition */}
            <HeadingComponent2 />
        </div>
    )
}
    
root.render(<HeadingComponent />);





