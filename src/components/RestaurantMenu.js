import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const  {id} = useParams();
    console.log(id)
    const[restaurantInfo,setRestaurantInfo] = useState(null);
    const [restaurantMenu,setRestaurantMenu] = useState([]);
    const [menuTitle,setMenuTitle] = useState("");


    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu =  async () => {
        const menuData = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.3590199&lng=78.8370316&restaurantId=${id}&submitAction=ENTER`);
        const json = await menuData.json();
        console.log(json)

        const resInfo = json?.data.cards[2]?.card?.card
        console.log(resInfo)

        setRestaurantInfo(resInfo)

        const resMenu = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
        console.log("resMenu",resMenu)
        setRestaurantMenu(resMenu)

        const southIndianMenu = resMenu?.cards[1]?.card.card
        setMenuTitle(southIndianMenu)
        console.log("South Indian Menu",southIndianMenu)
    }

    if(restaurantInfo === null){
        return <Shimmer />
    }

    const {name,cuisines,avgRating,costForTwoMessage,locality} = restaurantInfo?.info;
    const {deliveryTime} = restaurantInfo?.info?.sla;
    const {itemCards} = restaurantMenu?.cards[1]?.card?.card;
    const {title} = menuTitle
    console.log(title)
    console.log(itemCards)

    return (
        <div>
           <div className="res-info-container">
                <div className="res-info-card">
                    <h1>{name}</h1>
                    <div className="cuisines">
                        <h4>{cuisines.join(", ")}</h4> 
                        <h4>{costForTwoMessage}</h4>
                    </div>
                   <div className="res-description">
                        <p>{avgRating}</p>
                        <p>{locality}</p>
                        <p>{deliveryTime} mins</p>
                   </div>
                </div>
           </div>
            <h1>Menu</h1>
            <h3>{title}</h3>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;