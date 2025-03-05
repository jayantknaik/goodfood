import { useDispatch } from "react-redux";
import { addItem } from "../../utils/redux/cartSlice";
import { removeItem } from "../../utils/redux/cartSlice";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantCategory = ({id, title, itemCards, isExpanded, toggleCategory, resName, resId}) => {

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }

    const removeFoodItem = (id) => {
        dispatch(removeItem(id));
    }

    return (
        <div className="menu__category">
            <div className="menu__head" onClick={() => toggleCategory({id: id})}>
                <div className="menu__head__text">{title}</div>
                <div className={`menu__head__arrow ${isExpanded === id ? 'expand' : ''} `}></div>
            </div>
            <div className={`menu__list ${isExpanded === id ? 'expand' : ''}`}>
            {
                itemCards.map((li) => {

                    const {id} = li.card.info;

                    return (
                        <RestaurantMenuItem 
                            data={li} 
                            key={id} 
                            addFoodItem={addFoodItem} 
                            removeFoodItem={removeFoodItem} 
                            resName={resName}
                            resId={resId}
                        />
                    )

                })
            }
            </div>                                                                      
        </div>                                                                                                          
    )
}

export default RestaurantCategory;