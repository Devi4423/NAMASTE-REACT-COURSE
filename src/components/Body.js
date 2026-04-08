import useOnlineStatus from "../utility/useOnlineStatus";
import RestaurantCard  from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LISTOFRESTAURANTS } from "../utility/hard-code";
import UserContext from "../utility/UserContext";

const Body = ()=> {

    const [restuarantList,setRestuarantList] = useState([]);
    const [filteredResturant,setFilteredResturant] = useState([]);
    const [searchres,setSearchRes] = useState("");

    const onlineStatus = useOnlineStatus();

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const response = await fetch(LISTOFRESTAURANTS,
            {
                headers: {
                    "User-Agent":"Mozilla/5.0",
                    "Accept":"application/json"
                }
            }
        );
       const json = await response.json()
    //    console.log(json)

       const restaurants = json?.data?.cards?.find((card)=>card?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants

    //    console.log(restaurants)
       setRestuarantList(restaurants);
       setFilteredResturant(restaurants)
        
        // const text = await response.text();
        // console.log(text)
        // const json = JSON.parse(text)
        // console.log(json)
        
        // const json = await response.json();
        // console.log(json); 
    };

    function topRatedRestuarants () {
        const topRated = restuarantList.filter(
            (res)=>{
                return(res.info.avgRating >= 4.0)
            }
        );
        setFilteredResturant(topRated);
    } 

    const searchResturant = () => {
        const filter = restuarantList.filter(res=>res.info.name.toLowerCase().includes(searchres.toLowerCase()))
        // console.log(filter)
        const cuisineFilter = restuarantList.filter(res=>res.info.cuisines.join(", ").toLowerCase().includes(searchres.toLowerCase()))

        if(filter.length!==0){
            setFilteredResturant(filter)
        }
        else if(cuisineFilter.length!==0){
            setFilteredResturant(cuisineFilter)
        }
        else{
            setFilteredResturant([])
        }
    }


    if(onlineStatus === false){
        return <h1>You are offline. Please make your internet connection!!!</h1>
    }

    const {loggedInUser,setUsername} = useContext(UserContext);

    return filteredResturant.length === 0 ? <Shimmer/>
    :(
        <section className="p-3 sm:p-5 md:p-8">
            <h1 className="font-bold text-3xl text-center mt-2.5 md:text-4xl">Welcome to Foody</h1>
            <div className="my-8 flex flex-col items-center lg:flex-row gap-5 justify-center" >
                <div className="flex gap-1.5">
                    <input className="border border-gray-400 h-fit px-4 py-2 text-base rounded-md focus:outline-0" placeholder="search resturant" type="text" onChange={(e)=>setSearchRes(e.target.value)} value={searchres}/>
                    <button className="bg-orange-800 px-4 py-2 text-white rounded-lg" onClick={searchResturant}>Search</button>
                </div>
                <div>
                    <button onClick={topRatedRestuarants} className="bg-gray-400 py-2 px-4 ">Top Rated Restuarant</button>
                </div>
                <div>
                    <input className="border border-black px-4 py-2" placeholder="User Name" onChange={(e)=>setUsername(e.target.value)} value={loggedInUser} />
                </div>
            </div>  
            
            <div className=" lg:max-w-[1200px] xl:max-w-[900px] md:max-w-[720px] sm:max-w-[550px] xs:max-w-[280px]  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-5 lg:p-7">
               {filteredResturant.map((resturant)=>(
                <Link to={"/restaurant/"+resturant.info.id} key={resturant.info.id}><RestaurantCard  resdata={resturant} /></Link>
               ))}
            </div>
        </section>
    )
}

export default Body;