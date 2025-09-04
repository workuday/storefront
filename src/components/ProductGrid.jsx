import React, { useState } from "react";
import { Heart, Filter } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";
import { toggleWishlistItem } from "../store/wishlistSlice";

const ProductGrid = ({ title, products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const searchQuery = useSelector((state) => state.products.searchQuery);

  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const priceRanges = [
    { label: "Below ₹100", min: 0, max: 100 },
    { label: "₹100 - ₹500", min: 100, max: 500 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "Above ₹1000", min: 1000, max: Infinity },
  ];

  const brands = ["Brand A", "Brand B", "Brand C"];
  const discounts = [
    { label: "10% or more", value: 10 },
    { label: "20% or more", value: 20 },
    { label: "30% or more", value: 30 },
  ];
  const sortOptions = ["Price: Low to High", "Price: High to Low"];

  const categories = [
    { name: "Fruits & Vegetables", link: "/fruits-vegetables" },
    { name: "Food grains, Oils & Masala", link: "/grains-oils-masala" },
    { name: "Bakery, Cakes & Dairy", link: "/bakery-cakes-dairy" },
    { name: "Beverages", link: "/beverages" },
    { name: "Snacks & Branded Foods", link: "/snacks-foods" },
    { name: "Beauty & Hygiene", link: "/beauty-hygiene" },
    { name: "Cleaning & Household", link: "/cleaning-household" },
    { name: "Egg, Meat & Fish", link: "/egg-meat-fish" },
  ];

  const toggleCheckbox = (value, state, setState) => {
    if (state.includes(value)) setState(state.filter((v) => v !== value));
    else setState([...state, value]);
  };

  const handleClear = () => {
    setSelectedPrices([]);
    setSelectedBrands([]);
    setSelectedDiscounts([]);
    setSelectedSort("");
  };

  const handleApply = () => {
    console.log("Applied Filters:", {
      selectedPrices,
      selectedBrands,
      selectedDiscounts,
      selectedSort,
    });
  };

  // Filter products
  const filteredProducts = products.filter((p) => {
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      return false;

    if (selectedPrices.length > 0) {
      const inRange = selectedPrices.some((label) => {
        const range = priceRanges.find((r) => r.label === label);
        return p.price >= range.min && p.price <= range.max;
      });
      if (!inRange) return false;
    }

    if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand))
      return false;

    if (selectedDiscounts.length > 0) {
      const hasDiscount = selectedDiscounts.some((dLabel) => {
        const discountValue = discounts.find((d) => d.label === dLabel)?.value;
        return (
          p.oldPrice &&
          Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) >= discountValue
        );
      });
      if (!hasDiscount) return false;
    }

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSort === "Price: Low to High") return a.price - b.price;
    if (selectedSort === "Price: High to Low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 lg:p-6 bg-gray-100 min-h-screen">
      {/* Filter Toggle for Mobile */}
      <div className="lg:hidden flex justify-end mb-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-[#FB8700] text-white rounded-lg"
        >
          <Filter size={20} /> Filters
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          w-full lg:w-64 p-4 bg-white rounded-xl shadow-md
          lg:sticky lg:top-20
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 fixed top-0 left-0 h-full z-50 overflow-y-auto
          lg:relative lg:h-fit
        `}
      >
        {/* Close button for mobile */}
        <div className="lg:hidden flex justify-end mb-2">
          <button onClick={() => setSidebarOpen(false)} className="text-gray-700 font-bold">✕</button>
        </div>

        {/* Categories */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Categories</h4>
          {categories.map((cat) => {
            const isActive = location.pathname === cat.link;
            return (
              <Link
                key={cat.name}
                to={cat.link}
                className={`block px-3 py-1 rounded-lg text-sm mb-1 transition ${
                  isActive
                    ? "bg-[#FB8700] text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>

        {/* Price */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Price</h4>
          {priceRanges.map((range) => (
            <label key={range.label} className="block text-sm text-gray-700">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedPrices.includes(range.label)}
                onChange={() =>
                  toggleCheckbox(range.label, selectedPrices, setSelectedPrices)
                }
              />
              {range.label}
            </label>
          ))}
        </div>

        {/* Brands */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Brands</h4>
          {brands.map((brand) => (
            <label key={brand} className="block text-sm text-gray-700">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedBrands.includes(brand)}
                onChange={() =>
                  toggleCheckbox(brand, selectedBrands, setSelectedBrands)
                }
              />
              {brand}
            </label>
          ))}
        </div>

        {/* Discounts */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Discount</h4>
          {discounts.map((d) => (
            <label key={d.label} className="block text-sm text-gray-700">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedDiscounts.includes(d.label)}
                onChange={() =>
                  toggleCheckbox(d.label, selectedDiscounts, setSelectedDiscounts)
                }
              />
              {d.label}
            </label>
          ))}
        </div>

        {/* Sort */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Sort By</h4>
          {sortOptions.map((option) => (
            <label key={option} className="block text-sm text-gray-700">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedSort === option}
                onChange={() => setSelectedSort(option)}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-sm py-2 rounded-lg"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className="flex-1 bg-[#FB8700] hover:bg-orange-600 text-white text-sm py-2 rounded-lg"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </aside>

      {/* Products Grid */}
      <main className="flex-1">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
          <h2 className="text-xl font-bold mb-2 sm:mb-0">{title}</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-[#FB8700] hover:bg-orange-600 text-white rounded-lg text-sm font-medium"
          >
            &larr; Back
          </button>
        </div>

        {sortedProducts.length === 0 ? (
          <p className="text-gray-500">No products match your filters.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sortedProducts.map((product, idx) => {
              const cartItem = cartItems.find((item) => item.id === product.id);
              const isInWishlist = wishlistItems.some(
                (item) => item.id === product.id
              );

              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition flex flex-col relative"
                >
                  <div className="w-full h-40 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

      {product.discount && (
        <div className="flex justify-start">
          <span className="bg-[#FB8700] text-white text-xs sm:text-sm md:text-sm font-semibold px-2 rounded-br-lg">
            {product.discount}
          </span>
        </div>
      )}

                  <div className="px-4 mt-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-sm sm:text-base md:text-sm">
                        {product.name}
                      </h3>
                      <button
                        className={
                          isInWishlist
                            ? "text-red-500"
                            : "text-gray-400 hover:text-red-500"
                        }
                        onClick={() => dispatch(toggleWishlistItem(product))}
                      >
                        <Heart
                          size={22}
                          fill={isInWishlist ? "currentColor" : "none"}
                        />
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500">{product.weight}</p>
                  </div>

                  <div className="flex items-center justify-between my-2 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">
                        ₹{product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-gray-400 text-xs sm:text-sm line-through">
                          ₹{product.oldPrice}
                        </span>
                      )}
                    </div>

                    <div className="bg-[#FB8700] hover:bg-orange-600 text-white text-sm text-center font-semibold py-2 px-4 rounded-lg min-w-[80px]">
                      {cartItem ? (
                        <div className="flex items-center justify-between w-full">
                          <button
                            className="px-2 text-white font-bold"
                            onClick={() => dispatch(decreaseQuantity(product.id))}
                          >
                            -
                          </button>
                          <span className="mx-2">{cartItem.quantity}</span>
                          <button
                            className="px-2 text-white font-bold"
                            onClick={() => dispatch(increaseQuantity(product.id))}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          className="w-full"
                          onClick={() => dispatch(addToCart(product))}
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductGrid;
