import { useState, useEffect } from 'react';
import axiosInstance from '../Helper/axiosInstance';

const RecommendedProducts = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        const response = await axiosInstance.get('/recommendations/products-by-sentiment');
        setRecommendedProducts(response.data.data.products);
      } catch (err) {
        setError('Failed to fetch recommendations');
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedProducts();
  }, []);

  if (loading) return <div>Loading recommendations...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Recommended Products</h2>
      <div className="space-y-4">
        {recommendedProducts.map((product) => (
          <div key={product._id} className="border-b pb-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{product.productName}</h3>
              <div className="text-sm">
                <span className="text-green-600">
                  {(product.positiveRatio * 100).toFixed(1)}% Positive
                </span>
                <span className="text-gray-500 ml-2">
                  ({product.totalReviews} reviews)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;