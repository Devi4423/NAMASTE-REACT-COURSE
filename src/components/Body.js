import RestaurantCard  from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = ()=> {

    const [restuarantList,setRestuarantList] = useState([]);
    const [filteredResturant,setFilteredResturant] = useState([]);
    const [searchres,setSearchRes] = useState("");

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=9.3590199&lng=78.8370316&carousel=true&third_party_vendor=1",
            {
                headers: {
                    "User-Agent":"Mozilla/5.0",
                    "Accept":"application/json"
                }
            }
        );
       const json = await response.json()
       console.log(json)

       const restaurants = json?.data?.cards?.find((card)=>card?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants

       console.log(restaurants)
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
        console.log(filter)
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
    
    if (filteredResturant.length === 0){
        return<Shimmer />
    }

    return (
        <section className="body-section">
            <h1>Welcome to Foody</h1>
            <div className="filter-box">
                <input placeholder="search resturant" type="text" onChange={(e)=>setSearchRes(e.target.value)} value={searchres}/>
                <button className="search-btn" onClick={searchResturant}>Search</button>
                <button onClick={topRatedRestuarants} className="filter-btn">Top Rated Restuarant</button>
            </div>  
            
            <div className="restuarant-container">
               {filteredResturant.map((resturant)=>(
                <Link to={"/restaurant/"+resturant.info.id} key={resturant.info.id}><RestaurantCard  resdata={resturant} /></Link>
               ))}
            </div>
        </section>
    )
}

export default Body;