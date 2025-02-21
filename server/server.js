const express = require("express");
const cors = require("cors");
require('dotenv').config();

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const port = 3000;

const app = express();

const IMG_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

app.use(cors());
app.use(express.json());

app.get("/create-checkout-session", (req, res) => {
    res.send("Checkout session created.");
})

app.post("/create-checkout-session", async (req, res) => {

    const cartItems = req.body;

    let session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: cartItems.map((item) => ({
            price_data: {
                currency: "INR",
                product_data: {
                    name: item.value.name,
                },
                unit_amount: item.value.price,
            },
            quantity: item.quantity,
        })),
        success_url: "http://localhost:1234/goodfood/payment-success",
        cancel_url: "http://localhost:1234/goodfood/payment-failed",
    });

    res.json(session);
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})