import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utility/useRestaurantMenu";
import ResCategory from "./ResCategory"
import { useState } from "react";


const RestaurantMenu = () => {

    const [showItems] = useState()
    const [showIndex, setShowIndex] = useState(0);

    const  {id} = useParams();
    // console.log(id)
    
    const resInfo = useRestaurantMenu(id);
    // console.log("restuarantMenu",resInfo);

     if(resInfo === null){
        return <Shimmer/>
    }

    const infoRestaurant = resInfo?.data?.cards.find((card)=>card?.card?.card?.info)?.card?.card?.info
    // console.log("infores",infoRestaurant) 

    const categories = resInfo?.data?.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter((card)=>card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log("categories", categories)

    const {name,costForTwoMessage,city,areaName,cuisines,locality,avgRatingString} = infoRestaurant;
    const {minDeliveryTime,maxDeliveryTime} = infoRestaurant.sla;

    return(
        <div className="lg:w-[800px] mx-auto xl:max-w-[1200px] md:max-w-lg">
           <div className=" py-2.5 px-5">
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

           <div>
                {categories.map((category,index)=>(
                    <ResCategory 
                        category= {category} 
                        key={category.card.card.categoryId} 
                        showItems = {showIndex === index ? true : false}
                        setshowIndex={()=>setShowIndex(index)}
                    />
                ))}
           </div>

        </div>
    )
}

export default RestaurantMenu;