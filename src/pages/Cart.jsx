import { useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import CartEmpty from "../components/cart/CartEmpty";


const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);

    console.log(cartItems);

    return (
        <>
            {
                cartItems.length === 0 ? <CartEmpty /> :
                <div className="cart">
                    <div className="cart__lt">
                        <div className="cart__head">Shopping Cart</div>
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
                    <div className="cart__rt"></div>
                </div>
            }
        </>
    )
}

export default Cart;