import './App.css'
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import OrderConfirmation from "./pages/Orderconfirmationpage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <OrderConfirmation />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;