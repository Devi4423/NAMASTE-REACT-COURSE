import { useEffect, useState } from "react";
import { MENU_URL } from "./hard-code";

const useRestaurantMenu = (id) => {

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData()
    },[id])

    const fetchData = async () => {
        try{
            const url = await fetch(MENU_URL+id);
            const json = await url.json();
            // console.log("json",json)
            setResInfo(json)
        }

        catch(error){
            console.log("Error Fetching", error)
        }
    }
    return resInfo;
}

export default useRestaurantMenu;