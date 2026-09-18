
import { Routes,Route } from "react-router-dom";
import Trackorder from "./pages/Trackorder";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App(){
  return(
   
   <>
  <Navbar />
    <Routes>
      <Route path="/" element={<Trackorder />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
