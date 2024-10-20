const Order = require("../models/Order");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.createOrder = async (req, res) => {
  try {
    const {  products, totalAmount } = req.body;
    const userId = req.user._id ;
       console.log( "USER ID " + userId);
    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: products.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
          },
          unit_amount: product.salePrice * 100, // Stripe expects amounts in cents
        },
        quantity: product.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/order-success`,
      cancel_url: `${process.env.FRONTEND_URL}/cart`,
    });
    console.log("Creating order with data:", {
      userId,
      products: products.map((p) => ({
        id: p.id,
        quantity: p.quantity,
        price: p.salePrice,
      })),
      totalAmount,
      stripeSessionId: session.id,
    });

    // Create a new order
    const order = new Order({
      user: userId,
      products: products.map((product) => ({
        product: product.id,
        quantity: product.quantity,
        price: product.salePrice,
      })),
      totalAmount,
      stripeSessionId: session.id,
    });

    await order.save();

    res.status(201).json({ sessionId: session.id, orderId: order._id });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating order", error: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate(
      "products.product"
    );
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching orders", error: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId).populate(
      "products.product"
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching order", error: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.orderId,
      { status },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating order status", error: error.message });
  }
};



exports.processPayment = async (req, res) => {
  try {
    const { payment_method_id, amount } = req.body;
    const userId = req.user._id;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method: payment_method_id,
      confirm: true,
    });

    if (paymentIntent.status === "succeeded") {
      // Update the order status
      await Order.findOneAndUpdate(
        { user: userId, status: "pending" },
        { status: "processing", stripePaymentIntentId: paymentIntent.id }
      );

      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error processing payment", error: error.message });
  }
};
