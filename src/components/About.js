import React from "react";
// import UserClass from "./UserClass";
import UserContext from "../utility/UserContext";
// import User from './User';

class About extends React.Component{

    constructor(){
        super()

        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }

    render(){

        console.log("Parent Render");
        return(
            <div>
                <h1>About Page</h1>
                <div>
                    <h1>Loggedin User </h1>
                    <UserContext.Consumer>
                        {({loggedInUser})=>(<p className="font-bold">{loggedInUser}</p>)}    
                    </UserContext.Consumer>
                </div>
                {/* <UserClass /> */}
                {/* <User/> */}
            </div>
        )
    }
}

export default About;