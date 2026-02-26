import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));


// Using React.createElement
// const nestedHeader = React.createElement("div",{className:"title"},[
//     React.createElement("h1",{},"Heading 1"),
//     React.createElement("h2",{},"Heading2"),
//     React.createElement("h3",{},"Heading3")
// ])

// Using JSX
// const nestedHeader = (
//     <div className="title">
//         <h1>Using JSX</h1>
//         <h1>Heading 1</h1>
//         <h2>Heading 2</h2>
//         <h3>Heading 3</h3>
//     </div>
// )

//Using Functional Component

const NestedHeader = ()=> {
    return(
        <div className="title">
            <h1>Using Functional Component</h1>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
        </div>
    )
}
    
root.render(<NestedHeader />);





