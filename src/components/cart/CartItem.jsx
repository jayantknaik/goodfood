const CartItem = ({data}) => {

    const {id, name, description, imageId, price, defaultPrice, itemAttribute} = data.card.info;

    return (
        <li className="cart__item">
            <div className="cart__item__lt"></div>
            <div className="cart__item__rt"></div>
        </li>
    )

}

export default CartItem;