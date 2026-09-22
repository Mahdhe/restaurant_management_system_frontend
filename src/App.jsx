import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import OrderConfirmation from "./pages/Orderconfirmationpage";
import Aboutus from "./pages/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;