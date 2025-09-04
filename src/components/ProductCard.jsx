import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";
import { toggleWishlistItem } from "../store/wishlistSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const cartItem = cartItems.find((item) => item.id === product.id);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleToggleWishlist = () => {
    dispatch(toggleWishlistItem(product));
  };

  return (
   <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition flex flex-col">
  {/* Product Image */}
  <div className="w-full h-32 sm:h-36 md:h-40 lg:h-44 flex items-center justify-center overflow-hidden rounded-t-xl">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
    />
  </div>

  {/* Discount Badge */}
  {product.discount && (
    <div className="flex justify-start">
      <span className="bg-[#FB8700] text-white text-xs font-semibold px-2 py-1 rounded-br-lg shadow-md">
        {product.discount}
      </span>
    </div>
  )}

  {/* Product Info */}
  <div className="px-3 py-1.5 flex-1 flex flex-col justify-between">
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-sm sm:text-base">{product.name}</h3>
      <button
        className={
          isInWishlist
            ? "text-red-500"
            : "text-gray-400 hover:text-red-500 transition-colors"
        }
        onClick={handleToggleWishlist}
      >
        <Heart size={20} fill={isInWishlist ? "currentColor" : "none"} />
      </button>
    </div>
    <p className="text-xs text-gray-500">{product.weight}</p>
  </div>

  {/* Price & Cart Actions */}
  <div className="flex items-center justify-between mt-1 px-3 pb-3">
    <div className="flex flex-col">
      <span className="font-bold text-gray-800 text-sm sm:text-base">
        ₹{product.price}
      </span>
      {product.oldPrice && (
        <span className="text-gray-400 text-xs line-through">
          ₹{product.oldPrice}
        </span>
      )}
    </div>

    <div className="bg-[#FB8700] hover:bg-orange-600 text-white text-sm text-center font-semibold py-1.5 px-3 rounded-lg min-w-[70px]">
      {cartItem ? (
        <div className="flex items-center justify-between w-full">
          <button
            className="px-2 text-white font-bold"
            onClick={() => dispatch(decreaseQuantity(product.id))}
          >
            -
          </button>
          <span className="mx-1.5">{cartItem.quantity}</span>
          <button
            className="px-2 text-white font-bold"
            onClick={() => dispatch(increaseQuantity(product.id))}
          >
            +
          </button>
        </div>
      ) : (
        <button className="w-full" onClick={() => dispatch(addToCart(product))}>
          Add
        </button>
      )}
    </div>
  </div>
</div>

  );
}
