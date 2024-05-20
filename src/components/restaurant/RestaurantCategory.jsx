import { useDispatch } from "react-redux";
import { addItem } from "../../utils/redux/cartSlice";
import { removeItem } from "../../utils/redux/cartSlice";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantCategory = ({id, title, itemCards, isExpanded, toggleCategory}) => {

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }

    const removeFoodItem = (id) => {
        dispatch(removeItem(id));
    }

    return (
        <div className="menu__category">
            <div className="menu__head">
                <div className="menu__head__text">{title}</div>
                <div className={`menu__head__arrow ${isExpanded === id ? 'expand' : ''} `} onClick={() => toggleCategory({id: id})}></div>
            </div>
            <div className={`menu__list ${isExpanded === id ? 'expand' : ''}`}>
            {
                itemCards.map((li) => {

                    const {id} = li.card.info;

                    return (
                        <RestaurantMenuItem data={li} key={id} addFoodItem={addFoodItem} removeFoodItem={removeFoodItem} />
                    )

                })
            }
            </div>                                                                      
        </div>                                                                                                          
    )
}

export default RestaurantCategory;