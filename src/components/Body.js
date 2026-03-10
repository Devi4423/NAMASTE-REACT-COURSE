import RestaurantCard  from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = ()=> {

    const [restuarantList,setRestuarantList] = useState([]);
    const [filteredResturant,setFilteredResturant] = useState([]);
    const [searchres,setSearchRes] = useState("");

    useEffect(()=>{
        fetchData()
    },[])

    const  fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.3590199&lng=78.8370316&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1")
        const resjson = await data.json()

        //Optional Chaining
        console.log(resjson?.data?.cards?.slice(3))
        setRestuarantList(resjson?.data?.cards?.slice(3))
        setFilteredResturant(resjson?.data?.cards?.slice(3))
    } 

    function topRatedRestuarants () {
        const topRated = restuarantList.filter(
            (res)=>{
                return(res.card.card.info.avgRating>4)
            }
        );
        setRestuarantList(topRated);
    } 

    const searchResturant = () => {
        const filter = restuarantList.filter(res=>res.card.card.info.name.toLowerCase().includes(searchres.toLowerCase()))
        const cuisineFilter = restuarantList.filter(res=>res.card.card.info.cuisines.join(", ").toLowerCase().includes(searchres.toLowerCase()))

        if(filter.length!==0){
            setFilteredResturant(filter)
        }
        else if(cuisineFilter!==0){
            setFilteredResturant(cuisineFilter)
        }
        else{
            setFilteredResturant("Resturant not Found")
        }
    }
    

    return restuarantList.length === 0 ?(
        <Shimmer/>
    ):
    (
        <section className="body-section">
            <h1>Welcome to Foody</h1>
            <div className="filter-box">
                <input placeholder="search resturant" type="text" onChange={(e)=>setSearchRes(e.target.value)} value={searchres}/>
                <button className="search-btn" onClick={searchResturant}>Search</button>
                <button onClick={topRatedRestuarants} className="filter-btn">Top Rated Restuarant</button>
            </div>  
            
            <div className="restuarant-container">
               {filteredResturant.map((resturant)=>(
                <RestaurantCard key={resturant.card.card.info.id} resdata={resturant}/>
               ))}
            </div>
        </section>
    )
}

export default Body;