import "../scss/pages/payment.scss";
import PaymentSuccessIcon from "../../assets/images/payment-success.svg";

const PaymentSuccess = () => {
    return (
        <div className="payment">
            <div className="payment__img">
                <img src={PaymentSuccessIcon} alt="payment-success-icon" width={400} height={400} />
            </div>
            <div className="payment__title payment__title--success">Payment Success</div>
            <div className="payment__message">Your payment was successful.</div>
        </div>
    )
}

export default PaymentSuccess