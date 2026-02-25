// <div id="parent">
//      <div id="child1">
//          <h1>Hello World from React!</h1>
//          <h2>I am React Ignite from cdn link</h2>
//      </div>
//      <div id="child2">
//          <h1>Heading1</h1>
//          <h2>Heading2</h2>
//      </div>
// /div>

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Hello world from React!"),
        React.createElement("h2",{},"I am React Ignite from cdn link")
    ],
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Heading1"),
        React.createElement("h2",{},"Heading2")
    ]))
])  


root.render(parent);