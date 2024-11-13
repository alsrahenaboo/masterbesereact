const Order = require("../models/Order");
const Product = require("../models/product");

exports.getOrderStats = async (req, res) => {
  try {
    // Get orders grouped by month for the last 6 months
    const orderStats = await Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(new Date().setMonth(new Date().getMonth() - 6)),
          },
          isDeleted: false,
        },
      },
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" },
          },
          orders: { $sum: 1 },
          revenue: { $sum: "$totalAmount" },
        },
      },
      {
        $project: {
          _id: 0,
          month: {
            $concat: [
              { $toString: "$_id.month" },
              "/",
              { $toString: "$_id.year" },
            ],
          },
          orders: 1,
          revenue: 1,
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } },
    ]);

    res.json(orderStats);
  } catch (error) {
    console.error("Error getting order stats:", error);
    res.status(500).json({ message: "Error fetching order statistics" });
  }
};

exports.getProductStats = async (req, res) => {
  try {
    // Get top 10 products by sales
    const productStats = await Product.aggregate([
      {
        $lookup: {
          from: "orders",
          let: { productId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ["$$productId", "$products.productId"],
                },
                isDeleted: false,
              },
            },
            {
              $unwind: "$products",
            },
            {
              $match: {
                $expr: {
                  $eq: ["$products.productId", "$$productId"],
                },
              },
            },
            {
              $group: {
                _id: null,
                totalSales: { $sum: "$products.quantity" },
              },
            },
          ],
          as: "orderStats",
        },
      },
      {
        $project: {
          name: 1,
          stock: 1,
          sales: {
            $ifNull: [{ $arrayElemAt: ["$orderStats.totalSales", 0] }, 0],
          },
        },
      },
      {
        $sort: { sales: -1 },
      },
      {
        $limit: 10,
      },
    ]);

    res.json(productStats);
  } catch (error) {
    console.error("Error getting product stats:", error);
    res.status(500).json({ message: "Error fetching product statistics" });
  }
};
