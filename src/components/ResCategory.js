import { dropDownArrow,dropUpArrow} from "../utility/hard-code";
import ItemCards, {WithBestSellerItems} from "./ItemCards";

const ResCategory = ({category,showItems,setshowIndex}) => {

    // const [showItems,setShowItems] = useState(true)

    const itemcards = category.card.card.itemCards
    // console.log("cardItems", itemcards)

    const ItemCardsBestSeller = WithBestSellerItems(ItemCards)

    return(
        <div className=" border-b-[20px] border-gray-100 py-5 px-5 mt-5" data-testid="res-category">
            {/* Cordion Header */}
            <div className="flex justify-between items-center cursor-pointer" onClick={()=>setshowIndex()}>
                <h4 className="font-bold text-xl">{category.card.card.title} ({itemcards.length})</h4>
                <p>{showItems ? dropUpArrow : dropDownArrow}</p>
            </div>
            {/* Cordion data */}

            {/* Controlled Component */}
            {showItems &&
            <div>
                {itemcards.map((item)=>(
                    item.card.info.isBestseller ? <ItemCardsBestSeller key={item.card.info.id} item={item}/> : <ItemCards key={item.card.info.id} item={item}/>
                )
                )}
            </div>}
        </div>
    )
}

export default ResCategory;