import { RES_IMAGE } from "../utility/hard-code";

const RestaurantCard = (props) => {

    const {resdata} = props;
    const resimg = resdata.info.cloudinaryImageId
    const resname = resdata.info.name;
    const resprice = resdata.info.costForTwo;
    const cuisines = resdata.info.cuisines.join(", ");
    const locality = resdata.info.locality;
    const area= resdata.info.areaName;
    const avgRating = resdata.info.avgRating;
    
    // const {resimg,resname,resprice,cuisines,locality,area,avgRating} = resdata.info; 
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