import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const topSales1 = [
  {
    id: 1,
    name: "Apple",
    weight: "500 g",
    price: 120,
    oldPrice: 200,
    discount: "20%",
    image: "/media/apple.jpg",
  },
  {
    id: 2,
    name: "Tomato",
    weight: "1 kg",
    price: 60,
    oldPrice: 90,
    discount: "20%",
    image: "/media/tomato.jpg",
  },
  {
    id: 3,
    name: "Egg",
    weight: "12 Piece",
    price: 80,
    oldPrice: 100,
    discount: "20%",
    image: "/media/egg.png",
  },
  {
    id: 4,
    name: "Chicken",
    weight: "1 kg",
    price: 200,
    oldPrice: 280,
    discount: "20%",
    image: "/media/chicken.png",
  },
  {
    id: 5,
    name: "Apple",
    weight: "1 kg",
    price: 100,
    discount: "20%",
    image: "/media/greenapple.jpg",
  },
];

const topSales2 = [
  {
    id: 6,
    name: "Fresho Capsicum",
    weight: "500 g",
    price: 120,
    oldPrice: 200,
    discount: "20%",
    image: "/media/capsicum.png",
  },
  {
    id: 7,
    name: "Fresho Sweet Corn",
    weight: "1 kg",
    price: 60,
    oldPrice: 90,
    discount: "20%",
    image: "/media/corn.png",
  },
  {
    id: 8,
    name: "Fresho Cucumber",
    weight: "1 kg",
    price: 80,
    oldPrice: 100,
    discount: "20%",
    image: "/media/cucumber.png",
  },
  {
    id: 9,
    name: "Fresho Mushrooms",
    weight: "1 kg",
    price: 200,
    oldPrice: 280,
    discount: "20%",
    image: "/media/mushroom.png",
  },
  {
    id: 10,
    name: "Fresho Onion",
    weight: "1 kg",
    price: 100,
    discount: "20%",
    image: "/media/onion.png",
  },
];

const topSales3 = [
  {
    id: 11,
    name: "Fresho Muskmelon",
    weight: "1 kg",
    price: 200,
    oldPrice: 300,
    discount: "20%",
    image: "/media/muskmelon.png",
  },
  {
    id: 12,
    name: "Apple",
    weight: "1 kg",
    price: 100,
    oldPrice: 150,
    discount: "20%",
    image: "/media/apple.jpg",
  },
  {
    id: 13,
    name: "Fresho Mint Leaves",
    weight: "100 g",
    price: 80,
    oldPrice: 100,
    discount: "20%",
    image: "/media/mint-leaves.png",
  },
];

const topSales4 = [
  {
    id: 14,
    name: "Fresho Cabbage",
    weight: "500 g",
    price: 120,
    oldPrice: 200,
    discount: "20%",
    image: "/media/cabbage.png",
  },
  {
    id: 15,
    name: "Fresho Spring Onion",
    weight: "1 kg",
    price: 60,
    oldPrice: 90,
    discount: "20%",
    image: "/media/spring-onion.png",
  },
  {
    id: 16,
    name: "Fresho Banana",
    weight: "12 pcs",
    price: 80,
    oldPrice: 100,
    discount: "20%",
    image: "/media/banana.png",
  },
  {
    id: 17,
    name: "Fresho Red Banana",
    weight: "1 kg",
    price: 200,
    oldPrice: 280,
    discount: "20%",
    image: "/media/red-banana.png",
  },
  {
    id: 18,
    name: "Fresho Apple",
    weight: "1 kg",
    price: 100,
    oldPrice: 150,
    discount: "20%",
    image: "/media/royal-apple.png",
  },
];

const topSales5 = [
  {
    id: 19,
    name: "Fresho Capsicum",
    weight: "500 g",
    price: 120,
    oldPrice: 200,
    discount: "20%",
    image: "/media/capsicum.png",
  },
  {
    id: 20,
    name: "Fresho Sweet Corn",
    weight: "1 kg",
    price: 60,
    oldPrice: 90,
    discount: "20%",
    image: "/media/corn.png",
  },
  {
    id: 21,
    name: "Fresho Cucumber",
    weight: "1 kg",
    price: 80,
    oldPrice: 100,
    discount: "20%",
    image: "/media/cucumber.png",
  },
  {
    id: 22,
    name: "Fresho Mushrooms",
    weight: "1 kg",
    price: 200,
    oldPrice: 280,
    discount: "20%",
    image: "/media/mushroom.png",
  },
  {
    id: 23,
    name: "Fresho Onion",
    weight: "1 kg",
    price: 100,
    discount: "20%",
    image: "/media/onion.png",
  },
];

const topSales6 = [
  {
    id: 24,
    name: "Fresho Muskmelon",
    weight: "1 kg",
    price: 200,
    oldPrice: 300,
    discount: "20%",
    image: "/media/muskmelon.png",
  },
  {
    id: 25,
    name: "Apple",
    weight: "1 kg",
    price: 100,
    oldPrice: 150,
    discount: "20%",
    image: "/media/apple.jpg",
  },
  {
    id: 26,
    name: "Fresho Mint Leaves",
    weight: "100 g",
    price: 80,
    oldPrice: 100,
    discount: "20%",
    image: "/media/mint-leaves.png",
  },
];

const topSales7 = [
  {
    id: 27,
    name: "Fresho Logan",
    weight: "500 g",
    price: 120,
    oldPrice: 200,
    discount: "20%",
    image: "/media/longan.png",
  },
  {
    id: 28,
    name: "Fresho Avocado",
    weight: "1 kg",
    price: 60,
    oldPrice: 70,
    discount: "20%",
    image: "/media/avocado.png",
  },
  {
    id: 29,
    name: "Fresho Blueberry",
    weight: "12 piece",
    price: 80,
    oldPrice: 100,
    discount: "20%",
    image: "/media/blueberry.png",
  },
  {
    id: 30,
    name: "Fresho Mango",
    weight: "1 kg",
    price: 200,
    oldPrice: 280,
    discount: "20%",
    image: "/media/raw-mango.png",
  },
  {
    id: 31,
    name: "Fresho Drumstick",
    weight: "1 kg",
    price: 100,
    discount: "20%",
    image: "/media/drumstick.png",
  },
];

export default function ProductPage() {
  return (
    <div className="container mx-auto mt-5">
      {/* First Grid */}
      <section className="my-15">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-semibold">Top Sales</h2>
          <Link
            to="/fruits-vegetables"
            className="text-sm text-orange-500 font-medium hover:underline"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {topSales1.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Second Grid */}
      <section className="my-15">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-semibold">Top Sales</h2>
          <Link
            to="/grains-oil-masala"
            className="text-sm text-orange-500 font-medium hover:underline"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {topSales2.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Row 1 */}
<section className="my-15">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg md:text-xl font-semibold">Top Sales</h2>
    <Link
      to="/beauty-hygiene"
      className="text-sm text-orange-500 font-medium hover:underline"
    >
      See All
    </Link>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {topSales3.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}

    <div className="col-span-2 sm:col-span-3 md:col-span-2">
      <img
        src="/media/adsoffer.jpg"
        alt="Ad Banner"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</section>


      {/* Row 2 */}
      <section className="my-15">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-semibold">Top Sales</h2>
          <Link
            to="/beverages"
            className="text-sm text-orange-500 font-medium hover:underline"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {topSales4.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Row 3 */}
      <section className="my-15">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-semibold">Top Sales</h2>
          <Link
            to="/snacks-foods"
            className="text-sm text-orange-500 font-medium hover:underline"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {topSales5.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Row 4 */}
<section className="my-15">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg md:text-xl font-semibold">Top Sales</h2>
    <Link
      to="/beauty-hygiene"
      className="text-sm text-orange-500 font-medium hover:underline"
    >
      See All
    </Link>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {topSales6.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}

    <div className="col-span-2 sm:col-span-3 md:col-span-2">
      <img
        src="/media/adsoffer.jpg"
        alt="Ad Banner"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</section>


      {/* Row 5 */}
      <section className="my-15">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-semibold">Top Sales</h2>
          <Link
            to="/cleaning-household"
            className="text-sm text-orange-500 font-medium hover:underline"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {topSales7.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
