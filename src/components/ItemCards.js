import { RES_IMAGE } from "../utility/hard-code";

const ItemCards = ({item}) => {
    const {name,imageId,finalPrice,price,description} = item.card.info
    const{rating,ratingCountV2} = item?.card?.info?.ratings?.aggregatedRating
    console.log(item)

    return(
        <div className="flex justify-between items-center mt-4 pb-4 border-b-2 border-gray-200">
            <div>
                <h6 className="font-bold text-lg mb-2">{name}</h6>
                {price && <p className="mb-2"> <span className="text-sm font-bold">₹</span><span className="text-sm font-bold">{price/100}</span> </p>}
                {rating && <p className="mb-2 text-gray-500 font-bold text-sm"> <span className="bg-green-600 text-white px-1 py-0.5">Rating:</span> {rating} ({ratingCountV2})</p>}
                {description && <p className="text-sm text-gray-400 mr-5">{description}</p>}
            </div>
            {imageId ?
            <div className="relative w-[150px] h-[150px] shrink-0 ml-2.5">
                <button className="absolute text-green-600 font-bold text-lg border border-gray-500 left-1/2 -translate-x-1/2 shadow-xl rounded-2xl bg-white px-5 py-2.5 cursor-pointer hover:bg-gray-400">Add</button>
                {imageId && <img src={RES_IMAGE+imageId} className="w-full h-full object-cover rounded-2xl"/>}
            </div>:
            <div className="w-[150px] flex justify-center">
                <button className="text-center text-green-600 font-bold text-lg border border-gray-500 shadow-xl rounded-2xl bg-white px-5 py-2.5 cursor-pointer hover:bg-gray-400">Add</button>
            </div>
            }
        </div>
    )
}

// Higher Order Components
// => input (Itemcards) => return (new Component) => known as BestSellerItems

export const WithBestSellerItems = (ItemCards) => {
    return (props) => {
        return(
            <div>
                <p className="font-bold text-red-600 mt-5">Best Seller</p>
                <ItemCards {...props}/>
            </div>
        )
    }
}

export default ItemCards;