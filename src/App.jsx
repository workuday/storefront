import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoriesPage from "./pages/Categories";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import FruitsVegetables from "./pages/FruitsVegetables";
import GrainsOilsMasala from "./pages/GrainsOilsMasala";
import BakeryCakesDairy from "./pages/BakeryCakesDairy";
import Beverages from "./pages/Beverages";
import SnacksFood from "./pages/SnacksFood";
import BeautyHygiene from "./pages/BeautyHygiene";
import CleaningHousehold from "./pages/CleaningHousehold";
import EggFishMeat from "./pages/EggFishMeat";
import Wishlist from "./pages/Wishlist";
import CartPage from "./components/CartPage";
import ScrollToTop from "./components/ScrollToTop";

function Layout() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/login";

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/fruits-vegetables" element={<FruitsVegetables />} />
        <Route path="/grains-oils-masala" element={<GrainsOilsMasala /> } />
        <Route path="/bakery-cakes-dairy" element={<BakeryCakesDairy /> } />
        <Route path="/beverages" element={<Beverages /> } />
        <Route path="/snacks-foods" element={<SnacksFood /> } />
        <Route path="/beauty-hygiene" element={<BeautyHygiene /> } />
        <Route path="/cleaning-household" element={<CleaningHousehold /> } />
        <Route path="/egg-meat-fish" element={<EggFishMeat /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/carts" element={<CartPage />} />

      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );     
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
