import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Gallery from "./pages/Gallery"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/gallery" element={<Gallery></Gallery>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
