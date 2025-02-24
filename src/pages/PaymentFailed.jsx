import "../scss/pages/payment.scss";
import PaymentFailedIcon from "../../assets/images/payment-failed.svg";

const PaymentFailed = () => {
    return (
        <div className="payment">
            <div className="payment__img">
                <img src={PaymentFailedIcon} alt="payment-failed-icon" width={400} height={400} />
            </div>
            <div className="payment__title payment__title--fail">Payment Failed</div>
            <div className="payment__message">Your payment was unsuccessful. Please try again.</div>
        </div>
    )
}

export default PaymentFailed;