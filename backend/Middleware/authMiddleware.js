// // middleware/authMiddleware.js
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const authMiddleware = async (req, res, next) => {
//   const token = req.header("Authorization").replace("Bearer ", "");

//   if (!token) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, "YOUR_SECRET_KEY"); // تأكد من استخدام نفس المفتاح السري
//     req.user = await User.findById(decoded.userId).select("-password"); // ربط المستخدم مع الطلب
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Token is not valid" });
//   }
// };


// module.exports = authMiddleware;
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const Order = require("../models/Order");

// const authMiddleware = async (req, res, next) => {
//   const token = req.header("Authorization")?.replace("Bearer ", "");

//   if (!token) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.userId).select("-password");

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     req.user = user;

//     // Add order-specific middleware functionality
//     if (req.params.orderId) {
//       const order = await Order.findById(req.params.orderId);
//       if (!order) {
//         return res.status(404).json({ message: "Order not found" });
//       }
//       if (order.user.toString() !== user._id.toString()) {
//         return res
//           .status(403)
//           .json({ message: "Not authorized to access this order" });
//       }
//       req.order = order;
//     }

//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Token is not valid" });
//   }

// };

// module.exports = authMiddleware;


const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Order = require("../models/Order");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });

  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "YOUR_SECRET_KEY");
    const user = await User.findById(decoded.userId).select("-password");
    console.log(user);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;

    // إضافة وظيفة متعلقة بالطلب
    if (req.params.orderId) {
      const order = await Order.findById(req.params.orderId);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      if (order.user.toString() !== user._id.toString()) {
        return res
          .status(403)
          .json({ message: "Not authorized to access this order" });
      }
      req.order = order;
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;


