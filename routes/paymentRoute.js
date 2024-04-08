const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51P1h1i04ouqJ3TcDAaf23xBRaJDjtYTC4XwJuMMAIV7IfcEMxzMs2gFpwVMgXexKt6WkGvGf50Fm9CzPhAOcAxHc00vvrN5AF2"
);

router.post("/", async (req, res) => {
  try {
    const { amount, currency, productName } = req.body;

    console.log("amount: ", amount);
    console.log("currency: ", currency);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: productName,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/payment/success",
      cancel_url: "http://localhost:3000/payment/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/", (req, res) => {
  res.send("Payment successful!");
  console.log("Payment successful!");
});

module.exports = router;
