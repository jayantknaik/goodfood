import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import CartEmpty from "../components/cart/CartEmpty";
import '../scss/pages/cart.scss';
import { clearCart } from "../utils/redux/cartSlice";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const clearCartItems = (cartItems) => {
        dispatch(clearCart(cartItems));
    }

    return (
        <>
            {
                cartItems.length === 0 ? <CartEmpty /> :
                <div className="cart">
                    <div className="cart__lt">
                        <div className="cart__lt__top">
                            <div className="cart__head">Cart {`(${cartItems.length})`}</div>
                            <div className="cart__clearAll" onClick={()=>{clearCartItems(cartItems)}}>Clear All</div>
                        </div>
                        <div className="cart__details">
                            <div className="cart__details__item">Product Details</div>
                            <div className="cart__details__item">Price</div>
                            <div className="cart__details__item">Quantity</div>
                            <div className="cart__details__item">Total</div>
                        </div>
                        <ul className="cart__list">
                            {
                                cartItems.map((item, index) => {
                                    const {id} = item.card.info;
                                    return (
                                        <CartItem key={index} data={item} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="cart__rt">
                        <div className="cart__rt__head">Summary</div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart;