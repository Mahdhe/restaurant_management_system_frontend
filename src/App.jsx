import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Aboutus from "./pages/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Aboutus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;