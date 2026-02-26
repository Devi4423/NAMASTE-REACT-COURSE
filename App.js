import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => render from ReactDOM => converted to HTML Element => Display in the browser

const heading = React.createElement("h1",{id:"heading"},"Hello World!");

console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));


//JSX => HTML like syntax, XML like syntax
//JSX is not valid Java Script
//So Js engine does not understand the JSX syntax
//JSX syntax is not understood by the browser, JSX is converted as Javascript code by Babel and then reached
// the JS engine of the browser to understand the code and then display the browser

const jsxHeading = <h1 id="heading">Hello World from JSX!</h1>
root.render(jsxHeading);
console.log(jsxHeading)




