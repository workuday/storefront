import { ShoppingCart, Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../store/productsSlice";
import { useState } from "react";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
    <header className="fixed top-0 left-0 w-full z-[1000] bg-[#FB8700] text-white shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 md:py-4 relative z-[1001]">
    <Link to="/" className="font-bold text-2xl sm:text-3xl">.Logo</Link>

    <div className="hidden md:flex flex-1 mx-4">
      <div className="bg-white rounded-[10px] px-3 py-1 flex items-center shadow-sm w-full">
        <input
          type="text"
          placeholder="Search products here"
          className="w-full bg-transparent px-2 py-2 text-gray-700 focus:outline-none text-sm sm:text-base"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>
    </div>

    <div className="hidden md:flex items-center gap-4">
      <Link to="/wishlist" className="bg-white/20 p-2 rounded-[8px] flex items-center justify-center hover:bg-white/30 transition">
        <Heart size={20} />
      </Link>
      <Link to="/carts" className="relative bg-white/20 p-2 rounded-[8px] flex items-center justify-center hover:bg-white/30 transition">
        <ShoppingCart size={20} />
        {totalCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
            {totalCount}
          </span>
        )}
      </Link>
      <Link to="/login" className="bg-white text-[#FB8700] px-4 sm:px-5 py-2 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-white/90 transition">
        LOGIN
      </Link>
    </div>

    <div className="md:hidden flex items-center">
      <button onClick={() => setMobileMenu(!mobileMenu)} className="p-2 rounded-md hover:bg-white/20 transition z-[1002]">
        {mobileMenu ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>

  {mobileMenu && (
    <div className="md:hidden fixed top-[64px] left-0 w-full bg-[#FB8700] px-4 pb-4 flex flex-col gap-4 z-[999] shadow-lg">
      <div className="bg-white rounded-[10px] px-3 py-1 flex items-center shadow-sm w-full">
        <input
          type="text"
          placeholder="Search products here"
          className="w-full bg-transparent px-2 py-2 text-gray-700 focus:outline-none text-sm"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>
      <Link to="/wishlist" className="flex items-center gap-2 text-white hover:text-gray-200">
        <Heart size={20} /> Wishlist
      </Link>
      <Link to="/carts" className="flex items-center gap-2 text-white hover:text-gray-200 relative">
        <ShoppingCart size={20} />
        {totalCount > 0 && (
          <span className="absolute -top-2 -right-6 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
            {totalCount}
          </span>
        )}
        Cart
      </Link>
      <Link to="/login" className="bg-white text-[#FB8700] px-4 py-2 rounded-[8px] font-semibold text-center">
        LOGIN
      </Link>
    </div>
  )}
</header>

<div className="h-[64px] md:h-[80px]"></div>

    </>
  );
}
