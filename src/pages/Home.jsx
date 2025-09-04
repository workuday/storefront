import { motion } from "framer-motion";
import Categories from "../components/Categories";
import Banner from "../../public/media/Banner.jpg";
import ProductGrid from "../components/ProductPage";
import Tabs from "../components/Tabs";

export default function Home() {
  return (
    <>
      <Tabs />

      <motion.section
        className="container mx-auto px-4 mt-4 sm:mt-6 md:mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <img
            src={Banner}
            alt="banner"
            className="w-full h-40 sm:h-56 md:h-72 lg:h-96 object-cover rounded-xl"
          />
        </div>
      </motion.section>

      <motion.div
        className="container mx-auto px-4 mt-6 sm:mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Categories />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 mt-6 sm:mt-8 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <ProductGrid />
      </motion.div>
    </>
  );
}
