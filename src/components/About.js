import React from "react";
import UserClass from "./UserClass";
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
                <UserClass />
                {/* <User/> */}
            </div>
        )
    }
}

export default About;