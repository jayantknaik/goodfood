import { useSelector } from "react-redux";
import RestaurantMenuItem from "../components/RestaurantMenuItem";


const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="cart">

        </div>
    )
}

export default Cart;