import RestaurantCard  from "./RestaurantCard";
import reslist from "../utility/mock_data";
import { useState } from "react";

const Body = ()=> {

    const [restuarantList,setRestuarantList] = useState(reslist);

    console.log(restuarantList)

    function topRatedRestuarants () {
        const topRated = restuarantList.filter(
            (res)=>{
                return(res.card.card.info.avgRating>4)
            }
        );
        setRestuarantList(topRated);
        console.log(topRated)
    }

    return(
        <section className="body-section">
            <h1>Welcome to Foody</h1>
            <button onClick={topRatedRestuarants} className="filter-btn">Top Rated Restuarant</button>
            <div className="restuarant-container">
               {restuarantList.map((resturant)=>(
                <RestaurantCard key={resturant.card.card.info.id} resdata={resturant}/>
               ))}
            </div>
        </section>
    )
}

export default Body;