import { Recommendation } from '../models/recommendation.model.js';
import { Survey } from '../models/survey.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getRecommendations = async (req, res) => {
  try {
    const recommendations = await Recommendation.find();
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recommendations', error });
  }
};

export const getProductsBySentiment = asyncHandler(async (req, res) => {
  const productSentiments = await Survey.aggregate([
    {
      $group: {
        _id: "$productReviewed",
        totalReviews: { $sum: 1 },
        positiveSentiments: {
          $sum: { $cond: [{ $eq: ["$sentiment", "Positive"] }, 1, 0] }
        }
      }
    },
    {
      $lookup: {
        from: "products",
        localField: "_id",
        foreignField: "_id",
        as: "productDetails"
      }
    },
    {
      $unwind: "$productDetails"
    },
    {
      $project: {
        _id: 1,
        productName: "$productDetails.name",
        totalReviews: 1,
        positiveRatio: {
          $divide: ["$positiveSentiments", "$totalReviews"]
        }
      }
    },
    {
      $sort: { positiveRatio: -1 }
    }
  ]);

  return res.status(200).json(
    new ApiResponse(200, { products: productSentiments }, "Products fetched successfully")
  );
});
