import { motion } from "framer-motion";
import ProductGrid from "../components/ProductGrid";
import { productsData } from "../productsData";

export default function SnacksFood() {
  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ProductGrid title="Snacks & Branded Foods" products={productsData.snacksfood} />
    </motion.div>
  );
}
