import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name:"dummy"
        }
        
        console.log("Child Constructor");
    }
    
    async componentDidMount(){
        const userData = await fetch("https://api.github.com/users/GayathriDevi");
        const json = await userData.json();
        console.log(json)

        this.setState({
            name:json.login,
            avatar_url:json.avatar_url
        })

        console.log("Child Component Did Mount")
        this.timer = setInterval(()=>console.log("Namaste React"),1000)
    }

    componentDidUpdate(){
        console.log("Child component Did Update")
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("Child Component Will Mount")
    }

    render(){

        const {name,avatar_url} = this.state
        console.log(name)

        console.log("Child Render");
        return(
            <div className="user">
                <img src={avatar_url} alt="User"/>
                <h4>User Class</h4>
                <h5>{name}</h5>
            </div>
        )
    }
}

export default UserClass;


/****
 *              ------Render Phase-------
 *    ------About (parent) component initiated-----
 *              -Parent Constructor(called)
 *              -Parent Render(Called)
 *     
 *    ------USer Class First child initiated------
 *              -First Child Constructor(called)
 *              -First child Render(called)
 * 
 *    ------User Class second Child Initiated------
 *              -Second Child Constructor(called)
 *              -Second Child Render(called)
 * 
 *                  -----Commit Phase ------
 * 
 *    ------Child 1 Component Did Mount(called)-----
 *    ------Child2 Component Did Mount(called)-----
 *    ------Parent Component Did Mount(called)------
 * 
 * 
 */