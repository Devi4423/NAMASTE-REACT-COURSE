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
    const {minDeliveryTime,maxDeliveryTime} = infoRestaurant.sla;

    return(
        <div className="lg:w-3xl mx-auto xl:w-6xl">
           <div className="shadow-2xs py-2.5 px-5">
                <h1 className="text-2xl font-bold mt-10">{name}</h1>
                <div className="border border-gray-200 mt-8 p-6 rounded-xl shadow-2xl">
                    <div>
                        <p className="text-sm font-bold mb-1">{avgRatingString} {costForTwoMessage}</p>
                    </div>
                    <div className="text-orange-600 font-bold text-sm underline mb-1">{cuisines.join(", ")}</div>
                    <div className="text-sm text-gray-600"><span className="font-semibold text-black"> Outlet</span> {areaName}</div>
                    <div className="text-sm mt-1 font-bold">{minDeliveryTime} - {maxDeliveryTime} mins</div>
                </div>
           </div>

           {/* Category Restaurant */}

        </div>
    )
}

export default RestaurantMenu;