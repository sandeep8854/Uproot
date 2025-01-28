import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Background from "./pages/Background";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Advertisement from "./pages/Advertisement";
import Privacy from "./pages/Privacy";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/r/removeBg" element={<Background />} />
        <Route path="/result" element={<Result />} />
        <Route path="/p/pricing" element={<BuyCredit />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advertisement" element={<Advertisement />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
};

export default App;
