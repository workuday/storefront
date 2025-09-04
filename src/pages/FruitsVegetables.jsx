import { motion } from "framer-motion";
import ProductGrid from "../components/ProductGrid";
import { productsData } from "../productsData";

export default function FruitsVegetables() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ProductGrid title="Fruits & Vegetables" products={productsData.fruitsvegetables} />
    </motion.div>
  );
}
