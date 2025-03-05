import { Link } from "react-router-dom";
import EmptyCart from "../../../assets/images/emptyCart.png";

const Empty = ({title, cta, modifyClass}) => {
    return (
        <div className={`cart__empty ${modifyClass}`}>
            <img src={EmptyCart} className="cart__empty__img" alt="" />
            <div className="cart__empty__title">{title}</div>
            <Link to={'/'} className="cart__empty__cta">{cta}</Link>
        </div>
    )
}

export default Empty;