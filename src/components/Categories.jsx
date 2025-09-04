import { Link } from "react-router-dom";

const categories = [
  { name: "Fruits & Vegetables", image: "/media/fruits-icon.png", link: "/fruits-vegetables" },
  { name: "Food grains, Oils & Masala", image: "/media/food-grains.png", link: "/grains-oils-masala" },
  { name: "Bakery, Cakes & Dairy", image: "/media/bakery.png", link: "/bakery-cakes-dairy" },
  { name: "Beverages", image: "/media/beverages.png", link: "/beverages" },
  { name: "Snacks & Branded Foods", image: "/media/snacks.png", link: "/snacks-foods" },
  { name: "Beauty & Hygiene", image: "/media/beautycare.png", link: "/beauty-hygiene" },
  { name: "Cleaning & Household", image: "/media/household.png", link: "/cleaning-household" },
  { name: "Egg, Meat & Fish", image: "/media/nonveg.png", link: "/egg-meat-fish" },
];

export default function Categories() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <section className="p-2 sm:p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-semibold">Categories</h3>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.link}
              className="flex flex-col items-center bg-[#09B44C0D] rounded-xl p-3 sm:p-4 hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover mb-2"
              />
              <p className="text-xs sm:text-sm md:text-xs text-center text-gray-700 pt-1">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
