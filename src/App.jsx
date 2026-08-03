import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import OrderOnline from "./pages/OrderOnline";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <OrderOnline />
      </div>
      <Footer />
    </>
  );
}

export default App;
