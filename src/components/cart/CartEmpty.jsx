import { Link } from "react-router-dom";
import EmptyCart from "../../../assets/images/emptyCart.png";

const CartEmpty = () => {
    return (
        <div className="cart__empty">
            <img src={EmptyCart} className="cart__empty__img" alt="" />
            <div className="cart__empty__title">Looks like you haven't added anything to your cart yet. Start shopping to fill it up!</div>
            <Link to={'/'} className="cart__empty__cta">Get Food</Link>
        </div>
    )
}

export default CartEmpty;