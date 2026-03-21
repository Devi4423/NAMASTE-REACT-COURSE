import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utility/useRestaurantMenu";


const RestaurantMenu = () => {

    const  {id} = useParams();
    console.log(id)
    
    const resInfo = useRestaurantMenu(id);
    console.log("restuarantMenu",resInfo);

     if(resInfo === null){
        return <Shimmer/>
    }

    const infoRestaurant = resInfo?.data?.cards.find((card)=>card?.card?.card?.info)?.card?.card?.info
    console.log("infores",infoRestaurant)

    const {name,costForTwoMessage,city,areaName,cuisines,locality,avgRatingString} = infoRestaurant;
    const {deliveryTime} = infoRestaurant.sla;
    const cuisine = cuisines.join(", ") 

    return(
        <div>
           <div className="res-info-container">
                <div className="res-info-card">
                    <h1>{name}</h1>
                    <div className="cuisines">
                        <h4>{cuisine}</h4> 
                        <h4>{locality} {areaName} {city}</h4>
                    </div>
                   <div className="res-description">
                        <p>Rating: {avgRatingString}</p>
                        <p>{costForTwoMessage}</p>
                        <p>{deliveryTime} mins</p>
                   </div>
                </div>
           </div>
        </div>
    )
}

export default RestaurantMenu;