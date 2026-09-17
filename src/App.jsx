import './App.css'
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import OrderConfirmation from "./pages/Orderconfirmationpage";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <OrderConfirmation />
      <Footer />
    </>
  );
}

export default App;