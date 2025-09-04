import { motion } from "framer-motion";
import ProductGrid from "../components/ProductGrid";
import { productsData } from "../productsData";

export default function CleaningHousehold() {
  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ProductGrid title="Cleaning & Household" products={productsData.cleaninghousehold} />
    </motion.div>
  );
}
