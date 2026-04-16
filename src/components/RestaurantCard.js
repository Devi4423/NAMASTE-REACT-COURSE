import { useContext } from "react";
import { RES_IMAGE } from "../utility/hard-code";
import UserContext from "../utility/UserContext";

const RestaurantCard = (props) => {

    const {resdata} = props;
    // console.log(resdata);
    
    const resimg = resdata.info.cloudinaryImageId
    const resname = resdata.info.name;
    const resprice = resdata.info.costForTwo;
    const cuisines = resdata.info.cuisines.join(", ");
    const locality = resdata.info.locality;
    const area= resdata.info.areaName;
    const avgRating = resdata.info.avgRating;

    const {loggedInUser} = useContext(UserContext);
    // const {resimg,resname,resprice,cuisines,locality,area,avgRating} = resdata.info; 
    return (
        <div className="min-w-[200px]" data-testid="res-card">
            <div className="w-full h-40">
                <img src={RES_IMAGE+resimg} alt="res-img" className="w-full h-full object-cover rounded-md"/>
            </div>
            <div className="res-content">
                <h4 className="font-bold text-lg mt-1.5">{resname}</h4>
                <h6 className="text-sm mt-1.5 font-bold">{resprice}</h6>
                <p className="font-bold text-sm mt-1.5"> <span className="bg-green-700 text-white px-2 py-1">Rating:</span> {avgRating} stars</p >
                <p className="text-sm text-gray-500 mt-1.5">{cuisines}</p>               
                <p className="text-sm mt-1 text-gray-500 "> 
                 {locality==area ? locality : locality+", "+area}
                </p>  
                <p className="text-sm mt-1 text-black font-semibold">{loggedInUser}</p>               
            </div>
        </div>
    )
}

export default RestaurantCard;