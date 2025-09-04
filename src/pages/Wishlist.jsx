import { useSelector, useDispatch } from "react-redux";
import { toggleWishlistItem } from "../store/wishlistSlice";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function WishlistPage() {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  if (wishlistItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100 px-4">
        <p className="text-center text-gray-500 text-lg sm:text-xl">
          Your wishlist is empty.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-12 bg-gray-100 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        Your Wishlist
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {wishlistItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Remove Wishlist Button */}
            <button
              aria-label={`Remove ${item.name} from wishlist`}
              className="absolute top-3 right-3 text-red-500 hover:text-red-600 transition"
              onClick={() => dispatch(toggleWishlistItem(item))}
            >
              <Heart size={20} fill="currentColor" />
            </button>

            {/* Product Image */}
            <div className="w-full h-40 sm:h-48 flex items-center justify-center overflow-hidden mb-2">
              <img
                src={item.image}
                alt={item.name}
                className="h-full object-contain"
              />
            </div>

            {/* Discount Badge */}
            {item.discount && (
              <div className="mb-2">
                <span className="bg-orange-100 text-orange-600 text-xs sm:text-sm font-semibold px-2 py-1 rounded">
                  {item.discount}
                </span>
              </div>
            )}

            {/* Product Name & Weight */}
            <h3 className="font-semibold text-sm sm:text-base md:text-lg">
              {item.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">{item.weight}</p>

            {/* Price */}
            <div className="flex items-center gap-2 mt-2">
              <p className="text-gray-800 font-bold text-sm sm:text-base">
                ₹{item.price}
              </p>
              {item.oldPrice && (
                <span className="text-gray-400 text-xs sm:text-sm line-through">
                  ₹{item.oldPrice}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
