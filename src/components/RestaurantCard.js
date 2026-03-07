import { RES_IMAGE } from "../utility/hard-code";

const RestaurantCard = (props) => {
    const {resdata} = props;
    const resimg = resdata.card.card.info.cloudinaryImageId
    const resname = resdata.card.card.info.name;
    const resprice = resdata.card.card.info.costForTwo;
    const cuisines = resdata.card.card.info.cuisines.join(", ");
    const locality = resdata.card.card.info.locality;
    const area= resdata.card.card.info.areaName;
    const avgRating = resdata.card.card.info.avgRating; 
    
    // const {resimg,resname,resprice,cuisines,locality,area,avgRating} = resdata?.card?.card?.info; 
    return (
        <div className="resturant-card">
            <div className="res-img">
                <img src={RES_IMAGE+resimg} alt="res-img"/>
            </div>
            <div className="res-content">
                <h4>{resname}</h4>
                <h6>{resprice}</h6>
                <p className="cuisine">{cuisines}</p>
                <p className="rating"> <span>Rating:</span> {avgRating} stars</p >               
                <p className="location"> <span>Location: </span> 
                 {locality==area ? locality : locality+", "+area}
                </p>                
            </div>
        </div>
    )
}

export default RestaurantCard;