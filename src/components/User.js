import { useState,useEffect } from "react";
const User = () => {

    const [count,setCount] = useState(0);

    useEffect(()=>{
        //API fetch call
        const timer = setInterval(()=>console.log("Namaste React"),1000)
        console.log(timer)
        console.log("UseEffect Mounted")

        return()=>{
            clearInterval(timer)
            console.log("Useeffect Unmonted")
        }
    },[])
    console.log("render")
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>{setCount(c=>c+1)}}>Count Increase</button>
    </div>
  )
}

export default User;