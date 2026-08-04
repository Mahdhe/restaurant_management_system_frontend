import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import OrderOnline from "./pages/OrderOnline";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/order-online" element={<OrderOnline />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
