require("dotenv").config()

const express = require("express")
const app = express()
app.use(express.json())
app.use(express.static("bikestore"))

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
  [1, {priceInCents: 454900, name: "5010 Carbon C R Mountain Bike"}],
  [2, {priceInCents: 559920, name: "Ripley XT Factory Mountain Bike"}],
  [3, {priceInCents: 454900, name: "Trek Remedy 9.9 Mountain Bike - 2019, 19.5"}],
  [4, {priceInCents: 559920, name: "Chameleon MX D Mountain Bike"}],
  [5, {priceInCents: 454900, name: "Specialized 2022 Specialized Rockhopper Comp 29 Hardtail Mountain Bike"}],
  [6, {priceInCents: 559920, name: "Diamondback 2022 Hook 27.5 Inch Hardtail Mountain Bike"}],
  [7, {priceInCents: 454900, name: "Chameleon MX S Mountain Bike"}],
  [8, {priceInCents: 559920, name: "2023 Polygon Xtrada 6 1x11 - Mountain Bike"}],
  [9, {priceInCents: 454900, name: "VITUS RAPIDE FS CRX MOUNTAIN BIKE"}],
  [10, {priceInCents: 559920, name: "Trail 429 Pro XT/XTR Mountain Bike"}],
  [11, {priceInCents: 454900, name: "Ripmo XT Mountain Bike"}],
  [12, {priceInCents: 559920, name: "MTR 8.9"}],
  [13, {priceInCents: 454900, name: "SB160 C1 SLX Mountain Bike"}],
  [14, {priceInCents: 559920, name: "Slash 9.9 XX1 Flight Attendant"}],
  [15, {priceInCents: 454900, name: "Specialized Enduro Pro Mountain Bike - 2018, Large"}],
  [16, {priceInCents: 559920, name: "2022 Canyon Sender CFR Mullet Underdog Bike"}],
  [17, {priceInCents: 559920, name: "Demo Expert"}],
  [18, {priceInCents: 454900, name: "ROCKY MOUNTAIN SLAYER CARBON 50 29 BIKE 2022"}],
  [19, {priceInCents: 559920, name: "Salsa Mukluk Deore 11 Fat-Tire Bike"}],
  [20, {priceInCents: 454900, name: "Farley 9.6"}],
  [21, {priceInCents: 559920, name: "Specialized 2020 Fatboy"}]
])

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name
            },
            unit_amount: storeItem.priceInCents
          },
          quantity: 1
        }
      }),
      success_url: `${process.env.SERVER_URL}/index.html`,
      cancel_url: `${process.env.SERVER_URL}/cancel.html`
    })
    res.json({url: session.url})
  } catch (e) {
    res.status(500).json({error: e.message})
  }
})

app.listen(3000)