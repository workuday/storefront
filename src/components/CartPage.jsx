import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CartPage() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0)
    return (
      <div className="flex flex-col justify-center items-center p-8 h-screen bg-gray-100">
        <img
          src="/media/emptycart.jpg"
          alt="Empty Cart"
          className="w-48 h-48 sm:w-64 sm:h-64 mb-4"
        />
        <p className="text-lg sm:text-xl text-gray-600 mb-4 text-center">
          Your cart is currently empty, browse and add items to your cart.
        </p>
        <button
          className="bg-[#FB8700] text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          onClick={() => navigate("/")}
        >
          SHOP NOW
        </button>
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-12">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          Your Cart
        </h2>

        {cartItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white rounded-xl shadow-md mb-4"
          >
            <div className="flex items-start md:items-center w-full md:w-auto">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-md"
              />
              <div className="ml-0 md:ml-4 mt-3 md:mt-0 flex-1">
                <h3 className="font-semibold text-lg sm:text-xl">{item.name}</h3>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <p className="text-xs sm:text-sm text-gray-500">{item.weight}</p>
                  {item.discount && (
                    <span className="bg-[#FB8700] text-white text-xs sm:text-sm font-bold px-2 py-1 rounded">
                      {item.discount}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-800 font-bold text-sm sm:text-base">
                    Price: ₹{item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="text-gray-400 text-xs sm:text-sm line-through">
                      ₹{item.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button
                className={`bg-gray-200 py-1 px-3 sm:px-4 rounded-md hover:bg-gray-300 transition ${
                  item.quantity <= 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => dispatch(decreaseQuantity(item.id))}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span className="font-semibold text-sm sm:text-base">{item.quantity}</span>
              <button
                className="bg-gray-200 py-1 px-3 sm:px-4 rounded-md hover:bg-gray-300 transition"
                onClick={() => dispatch(increaseQuantity(item.id))}
              >
                +
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 sm:px-5 rounded-lg transition"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </motion.div>
        ))}

        {/* Checkout Button */}
        <div className="text-right mt-6">
          <button
            className="bg-[#FB8700] hover:bg-orange-600 text-white py-2 px-6 sm:px-8 rounded-lg text-lg sm:text-xl transition"
            onClick={() => navigate("/login")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
